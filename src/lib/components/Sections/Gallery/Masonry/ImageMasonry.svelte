<script lang="ts">
  import { onMount } from 'svelte';
  import createLayout from './justified-layout';
  import elementResizeEvent, { unbind } from 'element-resize-event';
  import LazyImage from './LazyImage.svelte';
  import { debounce } from './utils';
  import PhotoswipeTemplate from '../Photoswipe/PhotoswipeTemplate.svelte';
  import openPhotoSwipe from '../Photoswipe/index';

  export let images = [];
  export let targetRowHeight = 220;
  export let padding = 0;

  let element: HTMLElement;
  let scaledImages = [];
  let width: number;
  let isResizing = true;

  $: if (width) {
    scaledImages = createLayout(images, width, targetRowHeight, padding);
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

  function photoswipeInit(index: number) {
    openPhotoSwipe(images, index, (index) => {
      return element.querySelectorAll('[data-masonry-image]')[index];
    });
  }

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

<div class="max-w-full {isResizing ? 'overflow-hidden' : ''}">
  <div data-resizer bind:this={element}>
    <div class="flex flex-wrap" style="width: {width}px">
      {#each scaledImages as image (image.msrc)}
        <div
          class="relative bg-neutral-800"
          style={makeStyle(image)}
          on:click={() => photoswipeInit(image.index)}
        >
          <LazyImage src={image.msrc} />
          <slot {image} />
        </div>
      {/each}
    </div>
  </div>
</div>
<PhotoswipeTemplate />
