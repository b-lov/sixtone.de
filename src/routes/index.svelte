<script context="module">
  // import WPData from '$lib/wp-data';
  // export const load = WPData;
</script>

<script lang="ts">
  import sectionComponents from '$lib/components/Sections/sectionComponents';
</script>

{#each sectionComponents as componentData}
  <svelte:component this={componentData.component} {componentData} />
{/each}
