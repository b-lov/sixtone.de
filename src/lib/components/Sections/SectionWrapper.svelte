<script lang="ts">
  import { currentSection } from '$lib/stores';
  import { useViewport } from '$lib/actions';
  import DynamicBackground from './DynamicBackground.svelte';
  import SectionHeading from './SectionHeading.svelte';

  export let componentData;
  export let bgOpacity = 0.6;
  export let hasHeading = true;

  const { id, bgImage, name, subtitle } = componentData;
</script>

<section
  {id}
  class="relative pb-24 {$$props.sectionClass}"
  use:useViewport={{ rootMargin: '-50%' }}
  on:enterViewport={({ detail }) => currentSection.set(detail.target.id)}
>
  {#if bgImage}
    <DynamicBackground opacity={bgOpacity} {bgImage} class={$$props.backgroundClass} />
  {/if}
  {#if hasHeading}
    <SectionHeading {id} {name} {subtitle} />
  {/if}
  <div class="max-w-5xl mx-auto px-4 {$$props.containerClass}">
    <slot />
  </div>
</section>
