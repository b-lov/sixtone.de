<script lang="ts">
  import SectionWrapper from '../SectionWrapper.svelte';
  import Masonry from './Masonry.svelte';

  export let galleryData;

  const { id, name, subtitle, images } = galleryData;
</script>

<SectionWrapper {id} {name} {subtitle} sectionClass="pb-0" containerClass="max-w-none px-0">
  <Masonry rawImages={images} />
</SectionWrapper>
