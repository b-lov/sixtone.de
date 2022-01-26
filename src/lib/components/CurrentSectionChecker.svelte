<script lang="ts">
  import { onMount } from 'svelte';
  import { getSectionsBoundaries, getCurrentSectionId } from '$lib/utils';

  let sectionsBoundaries: { name: string; top: number; bottom: number }[];
  let scrollY: number;

  onMount(() => (sectionsBoundaries = getSectionsBoundaries()));

  $: if (sectionsBoundaries) console.log(getCurrentSectionId(scrollY, sectionsBoundaries));
</script>

<svelte:window bind:scrollY on:resize={() => (sectionsBoundaries = getSectionsBoundaries())} />
