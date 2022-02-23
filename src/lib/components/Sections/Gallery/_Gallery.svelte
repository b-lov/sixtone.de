<script lang="ts">
  import ImageMasonry from './Masonry/ImageMasonry.svelte';
  const allImages = import.meta.glob('/static/images/gallery/*.jpg');

  const getImages = async () => {
    const Images = [];
    for (let image in allImages) {
      const dataPath = `${image}?meta&imagetools`;
      await import(/* @vite-ignore */ dataPath).then(({ width, height }) => {
        Images.push({
          src: image,
          msrc: image.replace('gallery/', 'gallery/small/'),
          w: width,
          h: height,
          title: 'Lorem ipsum dolor'
        });
      });
    }
    return Images;
  };
</script>

{#await getImages() then images}
  <ImageMasonry {images} targetRowHeight={300} />
{/await}
