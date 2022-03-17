<script lang="ts">
  import sectionComponents from '$lib/components/Sections/sectionComponents';
  import { currentSection } from '$lib/stores';
  import { useViewport } from '$lib/actions';
  import SectionHeading from '$lib/components/Sections/SectionHeading.svelte';
  import DynamicBackground from '$lib/components/Sections/DynamicBackground.svelte';
</script>

<!-- TODO: make better use of IntersectionObserver to observe all sections with one instance. -->
{#each sectionComponents as { name, component, backgroundImage, subtitle }}
  <section
    use:useViewport={{ rootMargin: '-50%' }}
    on:enterViewport={({ detail }) => currentSection.set(detail.target.id)}
    id={name}
    class="relative {name !== 'Home' && name !== 'Gallerie' && name !== 'Sounds' && 'pb-24'}"
  >
    {#if backgroundImage}
      <DynamicBackground
        image={backgroundImage}
        opacity={name === 'Band' ? 0.9 : 0.6}
        class={name === 'Home' || name === 'Band'
          ? 'bg-[position:46%] bg-[length:201%] sm:bg-cover'
          : 'bg-cover bg-[position:30%] sm:bg-center'}
      />
    {/if}
    {#if name !== 'Home'}
      <SectionHeading {name} {subtitle} />
    {/if}
    <svelte:component this={component} />
  </section>
{/each}
