<!-- TODO: buffer feedback, see:
https://developer.mozilla.org/en-US/docs/Web/Guide/Audio_and_video_delivery/buffering_seeking_time_ranges -->
<script lang="ts">
  import { mouseXPositionInElement, secondsToMMSS } from '$lib//utils/utils';
  import Tooltip from './Tooltip.svelte';

  export let duration: number;
  export let currentTime: number;

  let bar: HTMLElement;
  let tooltipPosition: number = 0;
  let tooltipText: string = '00:00';
  let showTooltip = false;

  $: currentPercent = (currentTime / duration) * 100;
</script>

<div
  class="flex-1 flex cursor-pointer p-2"
  on:mousedown={(e) => (currentTime = mouseXPositionInElement(e, bar) * duration)}
  on:mouseenter={() => (showTooltip = true)}
  on:mouseleave={() => (showTooltip = false)}
  on:mousemove={(e) => {
    tooltipPosition = mouseXPositionInElement(e, bar) * 100;
    tooltipText = secondsToMMSS(mouseXPositionInElement(e, bar) * duration);
    if (e.buttons == 1) currentTime = mouseXPositionInElement(e, bar) * duration;
  }}
>
  <div class="relative w-full flex" bind:this={bar}>
    <div class="w-full flex rounded-full bg-neutral-700 overflow-hidden h-3">
      <div class="bg-accent" style="width: {currentPercent}%;" />
    </div>
    {#if showTooltip}
      <Tooltip {tooltipPosition} {tooltipText} />
    {/if}
  </div>
</div>
