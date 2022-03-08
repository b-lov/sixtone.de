<script lang="ts">
  import PartnerCard from './PartnerCard.svelte';
  import partners from './partners';
</script>

<div class="flex-1">
  <div class="grid grid-cols-2 p-16 gap-16">
    {#each partners as { name, picture, link }}
      <!-- <div class="bg-red-50 mx-auto"> -->
      <PartnerCard {name} {picture} {link} />
      <!-- </div> -->
    {/each}
  </div>
</div>
