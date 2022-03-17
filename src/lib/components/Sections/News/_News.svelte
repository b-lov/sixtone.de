<!-- TODO: import from instagram -->
<script lang="ts">
  import news from './news';
  import NewsCard from './NewsCard.svelte';
</script>

<div class="flex flex-wrap justify-center px-4 max-w-5xl mx-auto gap-4">
  {#each news as newsItem}
    <NewsCard {newsItem} />
  {/each}
</div>
