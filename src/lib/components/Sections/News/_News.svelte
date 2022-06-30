<!-- TODO: import from instagram -->
<script lang="ts">
  import SectionWrapper from '../SectionWrapper.svelte';
  import NewsCard from './NewsCard.svelte';

  export let data;
  export let news;
</script>

<SectionWrapper id={data.id} name={data.name} subtitle={data.subtitle}>
  <div class="flex flex-wrap justify-center gap-4">
    {#each news as newsItem}
      <NewsCard {newsItem} />
    {/each}
  </div>
</SectionWrapper>
