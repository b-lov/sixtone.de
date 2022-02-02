<script lang="ts">
  import Home from '$lib/components/Sections/Home/_Home.svelte';
  import Team from '$lib/components/Sections/Team/_Team.svelte';
  import { pageSections, navMenuOpen } from '$lib/stores';

  let scrollY: number;
</script>

<svelte:window bind:scrollY />
<div style="transform: translateY(-{scrollY / 2}px);" class="fixed -z-10 w-screen">
  <div
    class="h-screen bg-cover bg-right bg-neutral-800/90 bg-blend-multiply "
    style="background-image: url(/images/bg1.jpg);"
  />
  <div
    class="h-screen bg-cover bg-right bg-neutral-800/90 bg-blend-multiply "
    style="background-image: url(/images/bg2.jpg);"
  />
  <div
    class="h-screen bg-cover bg-right bg-neutral-800/90 bg-blend-multiply "
    style="background-image: url(/images/bg3.jpg);"
  />
  <div
    class="h-screen bg-cover bg-right bg-neutral-800/90 bg-blend-multiply "
    style="background-image: url(/images/bg4.jpg);"
  />
</div>
{#each $pageSections as section, i}
  {#if section === 'Home'}
    <Home />
  {:else if section === 'Team'}
    <Team />
  {:else}
    <div id={section} class="h-screen flex justify-end  {i % 2 && 'bg-neutral-900'}">
      <h1
        class="text-accent text-6xl uppercase tracking-[.3em] font-bold
        transition-all duration-300 mt-6 opacity-60 {$navMenuOpen ? 'mr-72' : 'mr-6'}"
      >
        {section}
      </h1>
    </div>
  {/if}
{/each}
