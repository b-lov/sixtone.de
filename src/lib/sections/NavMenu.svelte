<script lang="ts">
  import { fly } from 'svelte/transition';
  import { pageSections } from '$lib/stores';

  export let open: boolean;
  let clientWidth: number;
</script>

{#if open}
  <div
    bind:clientWidth
    transition:fly={{ x: clientWidth }}
    class="flex justify-end items-center fixed bg-black right-0 h-full bg-opacity-80 z-10 text-white"
  >
    <div class="flex flex-col items-end px-8 gap-2">
      {#each $pageSections as section}
        <div class="text-3xl font-bold tracking-widest">
          {section}
        </div>
      {/each}
    </div>
  </div>
{/if}
