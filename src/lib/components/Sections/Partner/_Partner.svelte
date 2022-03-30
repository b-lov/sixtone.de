<script lang="ts">
  import PartnerCard from './PartnerCard.svelte';
  import partners from './partners';
  import SectionWrapper from '../SectionWrapper.svelte';

  export let componentData;
</script>

<SectionWrapper {componentData} containerClass="max-w-4xl">
  <div class="flex flex-wrap gap-8 justify-between">
    {#each partners as { name, picture, link }}
      <PartnerCard {name} {picture} {link} />
    {/each}
  </div>
</SectionWrapper>
