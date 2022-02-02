import { readable, writable } from 'svelte/store';

export const pageSections = readable([
  'Home',
  'Events',
  'Team',
  'Medien',
  'News',
  'Feedback',
  'Partner',
  'Kontakt'
]);

export const navMenuOpen = writable(false);
