import { writable } from 'svelte/store';

export const currentSection = writable();

export const navMenuOpen = writable(true);

export const bigHeader = writable();

export const displayLanguage = writable('de');
