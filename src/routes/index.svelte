<script lang="ts">
  import Home from '$lib/components/pageSections/Home/_Home.svelte';
  import { pageSections, navMenuOpen } from '$lib/stores';
</script>

{#each $pageSections as section, i}
  {#if section === 'Home'}
    <Home />
  {:else}
    <div id={section} class="h-screen flex  justify-end  {i % 2 && 'bg-neutral-900'}">
      <h1
        class="text-white text-6xl uppercase tracking-wide font-bold
          transition-all duration-300 mt-8 {$navMenuOpen ? 'mr-72' : 'mr-8'}"
      >
        {section}
      </h1>
    </div>
  {/if}
{/each}
