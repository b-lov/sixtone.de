<script context="module">
  import WPData from '$lib/wp-data';
  export const load = WPData;
</script>

<script lang="ts">
  import sectionComponents from '$lib/components/Sections/sectionComponents';
  export let members;
</script>

{#each sectionComponents as componentData}
  {#if componentData.id === 'Band'}
    <svelte:component this={componentData.component} {componentData} {members} />
  {:else}
    <svelte:component this={componentData.component} {componentData} />
  {/if}
{/each}
