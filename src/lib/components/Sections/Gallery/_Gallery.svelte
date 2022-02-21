<script lang="ts">
  import { onMount } from 'svelte';
  import ImageMasonry from './Masonry/ImageMasonry.svelte';

  let Images = [];
  let loading = true;

  onMount(async () => {
    const allImages = import.meta.glob('/static/images/gallery/*.jpg');
    for (let src in allImages) {
      const dataPath = `${src}?meta&imagetools`;
      await import(/* @vite-ignore */ dataPath).then(({ width, height }) => {
        Images.push({ src, width, height });
      });
    }
    loading = false;
  });
</script>

{#if !loading}
  <ImageMasonry bind:images={Images} />
{/if}
