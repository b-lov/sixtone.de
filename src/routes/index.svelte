<script lang="ts">
  import sectionComponents from '$lib/components/Sections/sectionComponents';
  import { currentSection } from '$lib/stores';
  import { useViewport } from '$lib/actions';
</script>

<!-- TODO: make better use of IntersectionObserver to observe all sections with one instance. -->
{#each sectionComponents as { name, component }}
  <section
    use:useViewport={{ rootMargin: '-50%' }}
    on:enterViewport={({ detail }) => currentSection.set(detail.target.id)}
    id={name}
    class="scroll-mt-16"
  >
    <svelte:component this={component} />
  </section>
{/each}
