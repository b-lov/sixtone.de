import { writable, derived } from 'svelte/store';

export const currentLocale = writable('DE');
// export const currentLanguage = writable((browser && localStorage.getItem('currentLocale')) || 'RU');
// import { browser } from '$app/env';

export const rawData = writable({
  sections: { nodes: [] },
  members: { nodes: [] },
  sounds: { nodes: [] },
  images: { nodes: [] },
  feedbacks: { nodes: [] },
  partners: { nodes: [] }
});

export const sectionsStore = derived(rawData, ($rawData) => {
  return $rawData.sections.nodes;
});

export const bandStore = derived(rawData, ($rawData) => {
  return $rawData.members.nodes;
});
