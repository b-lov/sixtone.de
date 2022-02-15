<script lang="ts">
  import Home from '$lib/components/Sections/Home/_Home.svelte';
  import Team from '$lib/components/Sections/Team/_Team.svelte';
  import { pageSections, currentSection } from '$lib/stores';
  // TODO: make better use of IntersectionObserver to observe all sections with one instance.
  import { useViewport } from '$lib/actions';
  import SectionHeading from '$lib/components/Sections/SectionHeading.svelte';
</script>

{#each $pageSections as section, i}
  <section
    id={section}
    class="h-0 min-h-screen flex flex-col"
    use:useViewport={{ rootMargin: '-50%' }}
    on:enterViewport={({ detail }) => currentSection.set(detail.target.id)}
  >
    {#if section === 'Home'}
      <Home />
    {:else}
      <SectionHeading {section} />
      {#if section === 'Team'}
        <Team />
      {:else}
        <div class="h-full" />
      {/if}
    {/if}
  </section>
{/each}
