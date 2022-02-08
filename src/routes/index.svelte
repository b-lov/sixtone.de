<script lang="ts">
  import Home from '$lib/components/Sections/Home/_Home.svelte';
  import Team from '$lib/components/Sections/Team/_Team.svelte';
  import { pageSections, navMenuOpen } from '$lib/stores';

  let scrollY: number;
</script>

<svelte:window bind:scrollY />

<!-- <div
  style="transform:
    translateY(-{scrollY / 2}px)
    scale({1 + scrollY * 0.0005})
    rotate({scrollY * 0.1}deg)
  ;"
  class="fixed -z-10 w-screen"
>
  <div
    id="picture"
    class="h-screen bg-cover bg-right bg-neutral-800/70 bg-blend-multiply "
    style="background-image: url(/images/bg1.jpg);"
  />
  <div
    id="dots"
    class="absolute h-full w-full top-0"
    style="background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAAXNSR0IArs4c6QAAABRJREFUGFdjZGBg+M/AwMDIyAAFAA4pAQP4L554AAAAAElFTkSuQmCC);"
  />
</div> -->

{#each $pageSections as section, i}
  <section id={section} class="h-0 min-h-screen flex flex-col">
    {#if section === 'Home'}
      <Home />
    {:else if section === 'Team'}
      <Team />
    {:else}
      <div class="h-full flex justify-end {i % 2 && 'bg-neutral-800'}">
        <h1
          class="text-accent text-6xl uppercase tracking-[.3em] font-bold
          transition-all duration-300 mt-6 opacity-60 {$navMenuOpen ? 'mr-72' : 'mr-6'}"
        >
          {section}
        </h1>
      </div>
    {/if}
  </section>
{/each}
