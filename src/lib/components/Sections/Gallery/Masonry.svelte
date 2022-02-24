<script lang="ts">
  import { onMount } from 'svelte';
  import createLayout from './justified-layout';
  import elementResizeEvent, { unbind } from 'element-resize-event';
  import LazyImage from './LazyImage.svelte';
  import { debounce } from '$lib/utils';
  import Photoswipe from './Photoswipe.svelte';

  export let rawImages = [];
  export let targetRowHeight = 220;
  export let padding = 0;

  let element: HTMLElement;
  let scaledImages = [];
  let width: number;
  let isResizing = true;
  let photoswipe;

  $: if (width) {
    scaledImages = createLayout(rawImages, width, targetRowHeight, padding);
  }

  function makeStyle({ scaledWidth, scaledHeight, isLastInRow, isLastRow }) {
    let mr = padding + 'px';
    const mb = isLastRow ? '0' : mr;
    let flex = `0 0 ${scaledWidth}px`;
    if (isLastInRow) {
      mr = '0';
      flex = `1 1 ${scaledWidth - 4}px`;
    }
    return `height:${scaledHeight}px; flex: ${flex}; margin-right:${mr}; margin-bottom: ${mb}`;
  }

  // function photoswipeInit(index: number) {
  //   photoswipe.open(rawImages, index, (index) => {
  //     return element.querySelectorAll('[data-masonry-image]')[index];
  //   });
  // }

  onMount(() => {
    width = element.getBoundingClientRect().width;
    const resizedFinished = debounce(() => {
      isResizing = false;
    }, 300);
    elementResizeEvent(element, () => {
      if (Math.round(width) !== Math.round(element.getBoundingClientRect().width)) {
        isResizing = true;
        width = element.getBoundingClientRect().width;
        resizedFinished();
      }
    });
    return () => unbind(element);
  });
</script>

<!-- on:click={() => photoswipeInit(image.index)} -->
<div class="max-w-full {isResizing ? 'overflow-hidden' : ''}">
  <div data-resizer bind:this={element}>
    <div class="flex flex-wrap" style="width: {width}px">
      {#each scaledImages as image}
        <div
          class="relative bg-neutral-800"
          style={makeStyle(image)}
          on:click={() =>
            photoswipe.open(rawImages, image.index, (index) => {
              return element.querySelectorAll('[data-masonry-image]')[index];
            })}
        >
          <LazyImage src={image.msrc} />
          <!-- add overlay etc here -->
        </div>
      {/each}
    </div>
  </div>
</div>
<Photoswipe bind:this={photoswipe} />
