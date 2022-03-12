<script lang="ts">
  import { fly } from 'svelte/transition';
  import { sectionData, navMenuOpen } from '$lib/stores';
  import { clickOutside } from '$lib/actions';
  import NavMenuLink from './NavMenuLink.svelte';
</script>

<svelte:window on:keydown={(event) => event.key === 'Escape' && navMenuOpen.set(false)} />
{#if $navMenuOpen}
  <div
    use:clickOutside={() => navMenuOpen.set(false)}
    transition:fly={{ x: 200 }}
    class="flex justify-end items-center fixed bg-black/70 right-0 h-full z-10"
  >
    <div class="text-white flex flex-col items-start px-12 gap-2">
      {#each $sectionData as { title }, i}
        <NavMenuLink {title} flyDelay={i * 50} />
      {/each}
    </div>
  </div>
{/if}
