<script lang="ts">
  import PartnerCard from './PartnerCard.svelte';
  import SectionWrapper from '../SectionWrapper.svelte';

  export let data;
  export let partners;
</script>

<SectionWrapper id={data.id} name={data.name} subtitle={data.subtitle} containerClass="max-w-4xl">
  <div class="flex flex-wrap gap-8 justify-evenly">
    {#each partners as { name, picture, link }}
      <PartnerCard {name} {picture} {link} />
    {/each}
  </div>
</SectionWrapper>
