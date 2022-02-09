/// <reference types="@sveltejs/kit" />

declare namespace svelte.JSX {
  interface HTMLProps<T> {
    onintersect?: (e: CustomEvent) => void;
  }
}
