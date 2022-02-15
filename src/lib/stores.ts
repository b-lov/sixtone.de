import { readable, writable } from 'svelte/store';

export const pageSections = readable([
  'Home',
  'Events',
  'Medien',
  'Team',
  'News',
  'Feedback',
  'Partner',
  'Kontakt'
]);

export const currentSection = writable();

export const navMenuOpen = writable(false);

export const bigHeader = writable();
