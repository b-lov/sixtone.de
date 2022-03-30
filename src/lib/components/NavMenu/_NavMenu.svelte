<script lang="ts">
  import { fly } from 'svelte/transition';
  import { navMenuOpen } from '$lib/stores';
  import { clickOutside } from '$lib/actions';
  import NavMenuLink from './NavMenuLink.svelte';
  import sectionComponents from '$lib/components/Sections/sectionComponents';
</script>

<svelte:window on:keydown={(event) => event.key === 'Escape' && navMenuOpen.set(false)} />
{#if $navMenuOpen}
  <nav
    use:clickOutside={() => navMenuOpen.set(false)}
    transition:fly={{ x: 200 }}
    class="fixed flex justify-end items-center bg-black/70 right-0 h-full z-10"
  >
    <div class="flex flex-col items-start px-12 gap-2">
      {#each sectionComponents as { id, name }, i}
        <NavMenuLink {id} {name} flyDelay={i * 50} />
      {/each}
    </div>
  </nav>
{/if}
