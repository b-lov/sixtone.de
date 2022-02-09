/// <reference types="@sveltejs/kit" />

declare namespace svelte.JSX {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface HTMLAttributes<T> {
    onenterViewport?: (e: CustomEvent) => void;
    onexitViewport?: (e: CustomEvent) => void;
  }
}
