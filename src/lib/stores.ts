import { readable, writable } from 'svelte/store';

export const pageSections = readable([
  'Mitglieder',
  'Events',
  'Sounds',
  'Fotos',
  'Videos',
  'Feedback',
  'News',
  'Kontakt'
]);

export const navMenuOpen = writable(false);
