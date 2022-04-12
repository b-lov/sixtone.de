<script lang="ts">
  import SectionWrapper from '../SectionWrapper.svelte';
  import BgStamp from './BgStamp.svelte';
  import Caption from './Caption.svelte';
  import ScrollIndicator from './ScrollIndicator.svelte';

  export let componentData;
</script>

<SectionWrapper
  hasHeading={false}
  {componentData}
  sectionClass="pb-0"
  backgroundClass="bg-[position:45%] bg-[length:200%] sm:bg-cover"
  containerClass="max-w-none"
>
  <div class="relative h-screen flex items-center justify-between flex-col">
    <BgStamp />
    <div id="dummy" class="h-64" />
    <Caption />
    <ScrollIndicator class="mb-8" />
  </div>
</SectionWrapper>
