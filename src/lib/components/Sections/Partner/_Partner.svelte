<script lang="ts">
  import PartnerCard from './PartnerCard.svelte';
  import SectionWrapper from '../SectionWrapper.svelte';

  export let partners;
  export let componentData;
</script>

<SectionWrapper {componentData} containerClass="max-w-4xl">
  <div class="flex flex-wrap gap-8 justify-evenly">
    {#each partners as { name, picture, link }}
      <PartnerCard {name} {picture} {link} />
    {/each}
  </div>
</SectionWrapper>
