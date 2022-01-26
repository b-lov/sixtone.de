<script lang="ts">
  import Hero from '$lib/sections/Hero.svelte';
  import { pageSections } from '$lib/stores';
</script>

<Hero />
{#each $pageSections as section}
  <div id={section} class="h-screen  flex items-center justify-center">
    <h1 class="font-oswald text-amber-600 text-6xl">{section}</h1>
  </div>
{/each}
