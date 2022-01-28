import { readable, writable } from 'svelte/store';

export const pageSections = readable([
  'Home',
  'Team',
  'Events',
  'Medien',
  'News',
  'Feedback',
  'Partner',
  'Kontakt'
]);

export const navMenuOpen = writable(false);
