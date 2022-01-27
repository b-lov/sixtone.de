<script lang="ts">
  import Home from '$lib/components/pageSections/Home/_Home.svelte';
  import { pageSections } from '$lib/stores';
</script>

{#each $pageSections as section, i}
  {#if section === 'Home'}
    <Home />
  {:else}
    <div id={section} class="h-screen flex items-center justify-center {i % 2 && 'bg-neutral-900'}">
      <h1 class="font-oswald text-amber-600 text-6xl ">{section}</h1>
    </div>
  {/if}
{/each}
