<script lang="ts">
  import { fly } from 'svelte/transition';
  import { pageSections } from '$lib/stores';
  import NavMenuLink from '$lib/components/NavMenuLink.svelte';
  import CurrentSectionChecker from '$lib/components/CurrentSectionChecker.svelte';

  let open: boolean = true;
</script>

{#if open}
  <CurrentSectionChecker />
  <div
    transition:fly={{ x: 200 }}
    class="flex justify-end items-center fixed bg-black/70 right-0 h-full z-10"
  >
    <div class="flex flex-col items-end px-12 gap-2">
      <NavMenuLink section="Home" />
      {#each $pageSections as section}
        <NavMenuLink {section} />
      {/each}
    </div>
  </div>
{/if}
