<script lang="ts">
  import { fly } from 'svelte/transition';
  import { pageSections, navMenuOpen } from '$lib/stores';
  import { clickOutside } from '$lib/actions';
  import NavMenuLink from './NavMenuLink.svelte';
  import CurrentSectionChecker from './CurrentSectionChecker.svelte';
</script>

<svelte:window on:keydown={(event) => event.key === 'Escape' && navMenuOpen.set(false)} />
{#if $navMenuOpen}
  <CurrentSectionChecker />
  <div
    use:clickOutside={() => navMenuOpen.set(false)}
    transition:fly={{ x: 200 }}
    class="flex justify-end items-center fixed bg-black/70 right-0 h-full z-10"
  >
    <div in:fly={{ x: 200, delay: 200 }} class="flex flex-col items-end px-12 gap-2">
      {#each $pageSections as section}
        <NavMenuLink {section} />
      {/each}
    </div>
  </div>
{/if}
