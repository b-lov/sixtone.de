<script lang="ts">
  import sectionComponents from '$lib/components/Sections/sectionComponents';
  export let members;
  export let sounds;
  export let images;
  export let feedbacks;
  export let partners;
</script>

{#each sectionComponents as componentData}
  {#if componentData.id === 'Band'}
    <svelte:component this={componentData.component} {componentData} {members} />
  {:else if componentData.id === 'Sounds'}
    <svelte:component this={componentData.component} {componentData} {sounds} />
  {:else if componentData.id === 'Gallerie'}
    <svelte:component this={componentData.component} {componentData} {images} />
  {:else if componentData.id === 'Feedback'}
    <svelte:component this={componentData.component} {componentData} {feedbacks} />
  {:else if componentData.id === 'Partner'}
    <svelte:component this={componentData.component} {componentData} {partners} />
  {:else}
    <svelte:component this={componentData.component} {componentData} />
  {/if}
{/each}
