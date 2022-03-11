import { readable, writable } from 'svelte/store';

export const pageSections = readable([
  {
    title: 'Home'
  },
  {
    title: 'Sounds'
  },
  {
    title: 'Events'
  },
  {
    title: 'Gallerie'
  },
  {
    title: 'News'
  },
  {
    title: 'Feedback'
  },
  {
    title: 'Partner'
  },
  {
    title: 'Kontakt'
  }
]);

export const currentSection = writable();

export const navMenuOpen = writable(false);

export const bigHeader = writable();
