<script lang="ts">
  import PartnerCard from './PartnerCard.svelte';
  import partners from './partners';
</script>

<div class="px-4 flex flex-wrap gap-8 max-w-4xl mx-auto">
  {#each partners as { name, picture, link }}
    <PartnerCard {name} {picture} {link} />
  {/each}
</div>
