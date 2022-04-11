<script lang="ts">
  import SectionWrapper from '../SectionWrapper.svelte';
  import Masonry from './Masonry.svelte';

  export let componentData;
  export let images;
</script>

<SectionWrapper {componentData} sectionClass="pb-0" containerClass="max-w-none px-0">
  <Masonry rawImages={images} />
</SectionWrapper>
