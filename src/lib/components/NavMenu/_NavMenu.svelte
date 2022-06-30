<script lang="ts">
  import { fly } from 'svelte/transition';
  import { navMenuOpen } from '$lib/stores';
  import { clickOutside } from '$lib/actions';
  import { sectionsDataArr } from '$lib/stores/page-content';
  import NavMenuLink from './NavMenuLink.svelte';
  import LanguagePicker from './LanguagePicker.svelte';
</script>

<svelte:window on:keydown={(event) => event.key === 'Escape' && navMenuOpen.set(false)} />
{#if $navMenuOpen}
  <nav
    use:clickOutside={() => navMenuOpen.set(false)}
    transition:fly={{ x: 200 }}
    class="fixed flex justify-end items-center bg-black/70 right-0 h-full z-10"
  >
    <div class="flex flex-col items-start px-12 gap-2">
      {#if $sectionsDataArr}
        {#each $sectionsDataArr as section, i}
          <NavMenuLink id={section.id} name={section.name} flyDelay={i * 50} />
        {/each}
      {/if}
    </div>
    <div class="absolute bottom-0">
      <LanguagePicker />
    </div>
  </nav>
{/if}
