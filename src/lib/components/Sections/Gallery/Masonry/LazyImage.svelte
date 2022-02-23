<script lang="ts">
  import { onMount } from 'svelte';
  import { cache } from './cache';
  import whenElementVisible from './when-element-visible';

  function onLoad() {
    cache[src] = true;
    isLoaded = true;
  }

  // props
  export let src = '';
  export let srcset = '';
  // TODO: pass title here
  export let alt = '';

  // state
  let element: HTMLElement;
  let isLoaded = false;
  let isVisible = false;

  if (cache[src]) {
    isLoaded = true;
    isVisible = true;
  }

  onMount(() => {
    if (isLoaded) {
      return;
    }

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
  class="lazy-image-container {isLoaded ? 'is-loaded' : ''}"
  bind:this={element}
>
  {#if isVisible}
    <img class="lazy-image {isLoaded ? 'is-loaded' : ''}" on:load={onLoad} {src} {srcset} {alt} />
  {/if}
</div>

<style lang="postcss">
  .lazy-image-container {
    width: 100%;
    height: 100%;
    position: relative;
    display: block;

    transition: opacity 300ms ease-in-out;
    opacity: 0;
  }

  .is-loaded {
    opacity: 1;
  }

  /* .lazy-image-container .is-instant {
    opacity: 1;
    transition: none;
  } */

  .lazy-image {
    display: block;
    width: 100%;
    height: 100%;
  }
</style>
