<script lang="ts">
  import { onMount } from 'svelte';
  import whenElementVisible from './when-element-visible';

  export let src = '';
  export let srcset = '';
  // TODO: pass title here
  export let alt = '';

  const cache = {};
  let element: HTMLElement;
  let isLoaded = false;
  let isVisible = false;

  if (cache[src]) {
    isLoaded = true;
    isVisible = true;
  }

  function onLoad() {
    cache[src] = true;
    isLoaded = true;
  }

  onMount(() => {
    if (isLoaded) return;
    const disconnect = whenElementVisible(element, () => {
      isVisible = true;
    });
    return () => {
      disconnect();
    };
  });
</script>

<div
  data-masonry-image
  class="relative group w-full h-full block transition-opacity duration-300 overflow-hidden"
  style="opacity: {isLoaded ? '1' : '0'};"
  bind:this={element}
>
  {#if isVisible}
    <img
      class="absolute w-full h-full group-hover:scale-110 transition duration-1000"
      style="opacity: {isLoaded ? '1' : '0'};"
      on:load={onLoad}
      {src}
      {srcset}
      {alt}
    />
    <div
      class="
        absolute w-full h-full bg-neutral-800 opacity-0 md:opacity-70 group-hover:opacity-0 transition
        duration-700
      "
    />
  {/if}
</div>
