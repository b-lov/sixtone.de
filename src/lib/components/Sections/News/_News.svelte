<script lang="ts">
  import news from './news';
  import NewsCard from './NewsCard.svelte';
</script>

<div class="grid gap-7 grid-cols-2 mx-16">
  {#each news as newsItem}
    <NewsCard {newsItem} />
  {/each}
</div>
