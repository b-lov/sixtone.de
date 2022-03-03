<script lang="ts">
  import Masonry from './Masonry.svelte';
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

{#await getImages() then rawImages}
  <Masonry {rawImages} targetRowHeight={300} />
{/await}
