<script lang="ts">
  import PartnerCard from './PartnerCard.svelte';
  import partners from './partners';
</script>

<div class="flex-1">
  <div class="grid grid-cols-2 px-16 gap-16">
    {#each partners as { name, picture, link }}
      <PartnerCard {name} {picture} {link} />
    {/each}
  </div>
</div>
