<script lang="ts">
  import Home from '$lib/components/Sections/Home/_Home.svelte';
  import Team from '$lib/components/Sections/Team/_Team.svelte';
  import { pageSections, currentSection, navMenuOpen } from '$lib/stores';
  import { useViewport } from '$lib/actions';

  const updateCurrentSection = ({ detail }) => {
    currentSection.set(detail.target.id);
  };
</script>

{#each $pageSections as section, i}
  <section
    id={section}
    class="h-0 min-h-screen flex flex-col"
    use:useViewport={{ rootMargin: '-50%' }}
    on:enterViewport={updateCurrentSection}
  >
    {#if section === 'Home'}
      <Home />
    {:else if section === 'Team'}
      <Team />
    {:else}
      <div class="h-full flex justify-end">
        <h1
          class="
            text-accent text-6xl uppercase tracking-[.3em] font-bold
            transition-all duration-300 mt-6 opacity-60 {$navMenuOpen ? 'mr-72' : 'mr-6'}
          "
        >
          {section}
        </h1>
      </div>
    {/if}
  </section>
{/each}
