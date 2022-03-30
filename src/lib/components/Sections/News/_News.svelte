<!-- TODO: import from instagram -->
<script lang="ts">
  import SectionWrapper from '../SectionWrapper.svelte';
  import news from './news';
  import NewsCard from './NewsCard.svelte';
  export let componentData;
</script>

<SectionWrapper {componentData}>
  <div class="flex flex-wrap justify-center gap-4">
    {#each news as newsItem}
      <NewsCard {newsItem} />
    {/each}
  </div>
</SectionWrapper>
