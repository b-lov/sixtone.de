import { get } from 'svelte/store';
import { pageSections } from '$lib/stores';

export const getSectionsBoundaries = (): { name: string; top: number; bottom: number }[] => {
  return get(pageSections).map((name) => {
    const offset = window.scrollY - window.innerHeight / 3;
    let { top, bottom } = document.getElementById(name).getBoundingClientRect();
    (top += offset), (bottom += offset);
    return { name, top, bottom };
  });
};

export const getCurrentSectionId = (
  currentY: number,
  sections: { name: string; top: number; bottom: number }[]
): string => {
  return sections.find((section) => section.top <= currentY && section.bottom >= currentY).name;
};
