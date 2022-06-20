<script lang="ts">
  import { getContext, onMount } from 'svelte';
  import { getWpData } from '$lib/utils';
  import { currentLocale, rawData, sectionsStore } from '$lib/stores/wp-store';
  import * as Sections from '$lib/components/Sections';

  const sectionData: { [key: string]: any } = getContext('sectionData');

  const {
    homeData,
    bandData,
    soundsData,
    galleryData,
    newsData,
    feedbackData,
    partnersData,
    contactData
  } = sectionData;

  onMount(async () => {
    getWpData($currentLocale, rawData);
  });
</script>

{#each $sectionsStore as section}
  {section.name}
{/each}
<Sections.Home {homeData} />
<Sections.Band {bandData} />
<Sections.Sounds {soundsData} />
<Sections.Gallery {galleryData} />
<!-- TODO: get insta token with new password -->
{#if newsData.news}
  <Sections.News {newsData} />
{/if}
<Sections.Feedback {feedbackData} />
<Sections.Partners {partnersData} />
<Sections.Contact {contactData} />
