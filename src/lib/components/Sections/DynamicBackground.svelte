<script lang="ts">
  import { onMount } from 'svelte';

  export let scrollEffect: boolean = false;
  export let scaleEffect: boolean = false;
  export let imagePath: string;

  let scrollY: number;
  let overlay: string =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAAXNSR0IArs4c6QAAABRJREFUGFdjZGBg+M/AwMDIyAAFAA4pAQP4L554AAAAAElFTkSuQmCC';
  let thisElement: HTMLElement;
  let elementPosition: number;

  onMount(() => {
    elementPosition = thisElement.getBoundingClientRect().top + window.scrollY;
  });
</script>

<svelte:window bind:scrollY />
<div
  bind:this={thisElement}
  class="
    absolute w-full h-full top-0 bg-center bg-fixed bg-neutral-800/70 bg-blend-multiply
  "
  style="
    background-image: url(/images/{imagePath}.jpg);
    {scrollEffect ? `background-position-y: -${scrollY / 2}px;` : ''}
    background-size: {scaleEffect ? `auto ${100 + (scrollY - elementPosition) / 16}%` : 'cover'}
  "
>
  <div class="h-full w-full" style=" background-image: url({overlay}); " />
</div>

<!-- TODO: use viewport to only render element on sight
make better scaleEffect calculation -->
