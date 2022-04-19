<script lang="ts">
  import PartnerCard from './PartnerCard.svelte';
  import SectionWrapper from '../SectionWrapper.svelte';

  export let partnersData;

  const { id, name, subtitle, partners } = partnersData;
</script>

<SectionWrapper {id} {name} {subtitle} containerClass="max-w-4xl">
  <div class="flex flex-wrap gap-8 justify-evenly">
    {#each partners as { name, picture, link }}
      <PartnerCard {name} {picture} {link} />
    {/each}
  </div>
</SectionWrapper>
