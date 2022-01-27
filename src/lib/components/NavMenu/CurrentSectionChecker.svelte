<script lang="ts">
  import { onMount } from 'svelte';
  import { getSectionsBoundaries, getCurrentSectionId } from '$lib/utils';

  let sectionsBoundaries: { name: string; top: number; bottom: number }[];
  let scrollY: number;
  export let currentSection: string;

  onMount(() => (sectionsBoundaries = getSectionsBoundaries()));
  $: sectionsBoundaries && (currentSection = getCurrentSectionId(scrollY, sectionsBoundaries));
</script>

<svelte:window bind:scrollY on:resize={() => (sectionsBoundaries = getSectionsBoundaries())} />
