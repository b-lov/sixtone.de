<script lang="ts">
  import { getPageContent } from '$lib/utils/api';
  import {
    sectionsData,
    membersData,
    tracksData,
    imagesData,
    feedbacksData,
    partnersData
  } from '$lib/stores/page-content';
  import { onMount } from 'svelte';
  import * as Sections from '$lib/components/Sections';
  import Loading from '$lib/components/Loading.svelte';

  onMount(() => {
    getPageContent();
  });
</script>

{#if $sectionsData}
  <Sections.Home data={$sectionsData.home} />
  <Sections.Band data={$sectionsData.band} members={$membersData} />
  <Sections.Sounds data={$sectionsData.sounds} tracks={$tracksData} />
  <Sections.Gallery data={$sectionsData.gallery} images={$imagesData} />
  <!-- <Sections.News {newsData} /> -->
  <Sections.Feedback data={$sectionsData.feedback} feedbacks={$feedbacksData} />
  <Sections.Partners data={$sectionsData.partners} partners={$partnersData} />
  <Sections.Contact data={$sectionsData.contact} />
{:else}
  <div class="absolute top-1/2 left-1/2 -ml-8">
    <Loading />
  </div>
{/if}
