<script lang="ts">
  import Home from '$lib/components/Sections/Home/_Home.svelte';
  import Sounds from '$lib/components/Sections/Sounds/_Sounds.svelte';
  import Events from '$lib/components/Sections/Events/_Events.svelte';
  import Gallerie from '$lib/components/Sections/Gallerie/_Gallerie.svelte';
  import News from '$lib/components/Sections/News/_News.svelte';
  import Feedback from '$lib/components/Sections/Feedback/_Feedback.svelte';
  import Partner from '$lib/components/Sections/Partner/_Partner.svelte';
  import Kontakt from '$lib/components/Sections/Kontakt/_Kontakt.svelte';

  import { pageSections, currentSection } from '$lib/stores';
  import { useViewport } from '$lib/actions';
</script>

<!-- TODO: make better use of IntersectionObserver to observe all sections with one instance. -->
{#each $pageSections as section}
  <section
    use:useViewport={{ rootMargin: '-50%' }}
    on:enterViewport={({ detail }) => currentSection.set(detail.target.id)}
    id={section}
    class="scroll-mt-16"
  >
    {#if section === 'Home'}
      <Home />
    {:else if section === 'Sounds'}
      <Sounds />
    {:else if section === 'Events'}
      <Events />
    {:else if section === 'Gallerie'}
      <Gallerie />
    {:else if section === 'News'}
      <News />
    {:else if section === 'Feedback'}
      <Feedback />
    {:else if section === 'Partner'}
      <Partner />
    {:else if section === 'Kontakt'}
      <Kontakt />
    {/if}
  </section>
{/each}
