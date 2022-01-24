<script lang="ts">
  import { slide, fade, fly } from 'svelte/transition';

  export let open: boolean;
  let clientWidth: number;
</script>

{#if open}
  <div
    bind:clientWidth
    transition:fly={{ x: clientWidth }}
    class="flex justify-center items-center fixed bg-black w-screen h-screen bg-opacity-80 z-10 text-white"
  >
    bla
  </div>
{/if}
