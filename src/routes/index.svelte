<script lang="ts">
  import Home from '$lib/components/Sections/Home/_Home.svelte';
  import SectionHeading from '$lib/components/Sections/SectionHeading.svelte';
  import Team from '$lib/components/Sections/Team/_Team.svelte';
  import Gallery from '$lib/components/Sections/Gallery/_Gallery.svelte';
  import Events from '$lib/components/Sections/Events/_Events.svelte';
  import News from '$lib/components/Sections/News/_News.svelte';
  import Feedback from '$lib/components/Sections/Feedback/_Feedback.svelte';
  import Kontakt from '$lib/components/Sections/Kontakt/_Kontakt.svelte';

  import { pageSections, currentSection } from '$lib/stores';
  import { useViewport } from '$lib/actions';
  import Partner from '$lib/components/Sections/Partner/_Partner.svelte';
</script>

<!-- TODO: make better use of IntersectionObserver to observe all sections with one instance. -->
{#each $pageSections as section}
  <section
    use:useViewport={{ rootMargin: '-50%' }}
    on:enterViewport={({ detail }) => currentSection.set(detail.target.id)}
    id={section}
    class="min-h-screen flex flex-col scroll-mt-16"
  >
    {#if section === 'Home'}
      <Home />
    {:else}
      <SectionHeading {section} />
      {#if section === 'Team'}
        <Team />
      {:else if section === 'Events'}
        <Events />
      {:else if section === 'Gallerie'}
        <Gallery />
      {:else if section === 'Feedback'}
        <Feedback />
      {:else if section === 'Kontakt'}
        <Kontakt />
      {:else if section === 'News'}
        <News />
      {:else if section === 'Partner'}
        <Partner />
      {/if}
    {/if}
  </section>
{/each}
