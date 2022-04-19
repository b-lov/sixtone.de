<script lang="ts">
  import * as Sections from '$lib/components/Sections';
  import { getContext } from 'svelte';

  const sectionData: { [key: string]: {} } = getContext('sectionData');

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
  console.log(contactData);
</script>

<Sections.Home {homeData} />
<Sections.Band {bandData} />
<Sections.Sounds {soundsData} />
<Sections.Gallery {galleryData} />
<Sections.News {newsData} />
<Sections.Feedback {feedbackData} />
<Sections.Partners {partnersData} />
<Sections.Contact {contactData} />
