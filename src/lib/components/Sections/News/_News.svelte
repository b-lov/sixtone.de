<script lang="ts">
  import news from './news';
  import NewsCard from './NewsCard.svelte';
</script>

<div class="grid gap-7 grid-cols-2 px-16 max-w-5xl mx-auto">
  {#each news as newsItem}
    <NewsCard {newsItem} />
  {/each}
</div>
