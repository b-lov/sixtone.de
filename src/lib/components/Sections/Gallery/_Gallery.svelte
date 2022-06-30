<script lang="ts">
  import SectionWrapper from '../SectionWrapper.svelte';
  import Masonry from './Masonry.svelte';

  export let data;
  export let images;
</script>

<SectionWrapper
  id={data.id}
  name={data.name}
  subtitle={data.subtitle}
  sectionClass="pb-0"
  containerClass="max-w-none px-0"
>
  <Masonry rawImages={images} />
</SectionWrapper>
