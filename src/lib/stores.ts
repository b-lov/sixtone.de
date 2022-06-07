import { writable } from 'svelte/store';

export const currentSection = writable();

export const navMenuOpen = writable(false);

export const bigHeader = writable();

export const currentLanguage = writable('de');
