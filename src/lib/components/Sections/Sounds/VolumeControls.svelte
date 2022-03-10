<script lang="ts">
  import Icons from '$lib/components/Icons.svelte';

  let volume = 80;
  let muted = false;
</script>

<div class="w-1/4 flex items-center gap-2">
  <button on:click={() => (muted = !muted)}>
    {#if muted}
      <Icons
        volume-muted
        class="fill-red-300 hover:fill-accent transition duration-300"
        size={1.2}
      />
    {:else}
      <Icons volume class="fill-neutral-300 hover:fill-accent transition duration-300" size={1.2} />
    {/if}
  </button>
  <div class="flex-1 rounded-full bg-neutral-700 flex text-neutral-300 text-center text-xs">
    <div class="bg-neutral-400 p-1 rounded-full" style="width: {volume}%;" />
  </div>
</div>
