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
{#each $pageSections as { title }}
  <section
    use:useViewport={{ rootMargin: '-50%' }}
    on:enterViewport={({ detail }) => currentSection.set(detail.target.id)}
    id={title}
    class="scroll-mt-16"
  >
    {#if title === 'Home'}
      <svelte:component this={Home} />
    {:else if title === 'Sounds'}
      <Sounds />
    {:else if title === 'Events'}
      <Events />
    {:else if title === 'Gallerie'}
      <Gallerie />
    {:else if title === 'News'}
      <News />
    {:else if title === 'Feedback'}
      <Feedback />
    {:else if title === 'Partner'}
      <Partner />
    {:else if title === 'Kontakt'}
      <Kontakt />
    {/if}
  </section>
{/each}
