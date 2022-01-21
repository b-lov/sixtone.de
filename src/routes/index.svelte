<script lang="ts">
  import Header from '$lib/sections/Header.svelte';
  import Hero from '$lib/sections/Hero.svelte';
  const sections: string[] = [
    'Team',
    'Events',
    'Sounds',
    'Gallerie',
    'Videos',
    'Rezensionen',
    'News',
    'Kontakt'
  ];
</script>

<Hero />
{#each sections as section}
  <div class="h-screen  flex items-center justify-center">
    <h1 class="font-oswald text-amber-600 text-6xl">{section}</h1>
  </div>
{/each}
