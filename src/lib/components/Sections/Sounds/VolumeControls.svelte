<script lang="ts">
  import { mouseXPositionInElement } from '$lib/utils';

  import Icons from '$lib/components/Icons.svelte';

  export let volume: number;
  export let muted: boolean;

  let bar: HTMLElement;
  let handleActive: boolean;
</script>

<div class="w-1/3 flex items-center gap-1">
  <button on:click={() => (muted = !muted)}>
    {#if muted}
      <Icons
        volume-muted
        class="fill-neutral-300 hover:fill-accent transition duration-300"
        size={1.2}
      />
    {:else}
      <Icons volume class="fill-neutral-300 hover:fill-accent transition duration-300" size={1.2} />
    {/if}
  </button>
  <div
    class="flex-1 flex cursor-pointer p-2"
    on:mousedown={(e) => (
      (volume = mouseXPositionInElement(e, bar)), (muted = false), (handleActive = true)
    )}
    on:mousemove={(e) => {
      if (e.buttons == 1)
        (volume = mouseXPositionInElement(e, bar)), (muted = false), (handleActive = true);
    }}
    on:mouseup={() => (handleActive = false)}
    on:mouseleave={() => (handleActive = false)}
  >
    <div class="flex w-full relative items-center">
      <div class="w-full flex h-1.5 rounded-full bg-neutral-700 overflow-hidden" bind:this={bar}>
        <div class="bg-neutral-400" style="width: {muted ? '0' : volume * 100}%;" />
      </div>
      <div
        class="
          absolute w-3 -ml-1.5 h-3 bg-neutral-200 rounded-full transition
          {muted && 'hidden'} {handleActive && 'scale-150'}
        "
        style="left: {volume * 100}%;"
      />
    </div>
  </div>
</div>
