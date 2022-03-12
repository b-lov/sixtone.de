<script lang="ts">
  import sectionComponents from '$lib/components/Sections/sectionComponents';
  import { currentSection } from '$lib/stores';
  import { useViewport } from '$lib/actions';
  import SectionHeading from '$lib/components/Sections/SectionHeading.svelte';
  import DynamicBackground from '$lib/components/Sections/DynamicBackground.svelte';
</script>

<!-- TODO: make better use of IntersectionObserver to observe all sections with one instance. -->
{#each sectionComponents as { name, component, background }}
  <section
    use:useViewport={{ rootMargin: '-50%' }}
    on:enterViewport={({ detail }) => currentSection.set(detail.target.id)}
    id={name}
    class="scroll-mt-16 relative {!background && 'bg-neutral-900'}"
  >
    {#if background}
      <DynamicBackground image={background} />
    {/if}
    {#if name !== 'Home'}
      <SectionHeading {name} />
    {/if}
    <svelte:component this={component} />
  </section>
{/each}
