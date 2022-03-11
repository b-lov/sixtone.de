<script lang="ts" context="module">
  const audioElements: Set<HTMLAudioElement> = new Set();
</script>

<script lang="ts">
  import { secondsToMMSS } from '$lib/utils';
  import { onMount } from 'svelte';

  import VolumeControls from './VolumeControls.svelte';
  import PlayButton from './PlayButton.svelte';
  import ProgressBar from './ProgressBar.svelte';
  import PlayingIndicator from './PlayingIndicator.svelte';

  export let name: string;
  export let src: string;

  let audio: HTMLAudioElement;
  let paused: boolean = true;
  let currentTime: number = 0;
  let duration: number;
  let volume: number = 0.8;
  let muted: boolean = false;

  const stopOthers = () => {
    audioElements.forEach((element) => {
      if (element !== audio) element.pause();
    });
  };

  onMount(() => {
    audioElements.add(audio);
    return () => audioElements.delete(audio);
  });
</script>

<div class="bg-neutral-800 py-4 px-6 flex flex-col gap-3">
  <div class="flex items-center justify-between">
    <div class="flex items-center gap-2">
      <h1 class="text-neutral-300 font-light font-oswald uppercase tracking-wide">
        {name}
      </h1>
      {#if !paused}
        <!-- content here -->
        <PlayingIndicator />
      {/if}
    </div>
    <VolumeControls bind:muted bind:volume />
  </div>
  <div class="flex items-center">
    <PlayButton on:click={() => (audio.paused ? audio.play() : audio.pause())} {paused} />
    {#if duration}
      <span class="text-left ml-4">{secondsToMMSS(currentTime)}</span>
      <ProgressBar bind:currentTime {duration} />
      <span class="text-right">{secondsToMMSS(duration)}</span>
    {/if}
  </div>
</div>

<audio
  {src}
  bind:this={audio}
  bind:paused
  on:play={stopOthers}
  bind:currentTime
  bind:duration
  bind:volume
  {muted}
  preload="metadata"
/>

<style lang="postcss">
  span {
    @apply text-xs text-neutral-300 w-9 tracking-wide select-none;
  }
</style>
