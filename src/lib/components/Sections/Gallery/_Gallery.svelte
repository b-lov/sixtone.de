<script lang="ts">
  import ImageMasonry from './Masonry/ImageMasonry.svelte';

  const getImages = async () => {
    const Images = [];
    const allImages = import.meta.glob('/static/images/gallery/*.jpg');
    for (let src in allImages) {
      const dataPath = `${src}?meta&imagetools`;
      await import(/* @vite-ignore */ dataPath).then(({ width, height }) => {
        Images.push({ src, width, height });
      });
    }
    return Images;
  };
</script>

{#await getImages() then images}
  <ImageMasonry {images} />
{/await}
