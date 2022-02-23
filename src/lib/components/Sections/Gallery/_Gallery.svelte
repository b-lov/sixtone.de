<script lang="ts">
  import ImageMasonry from './Masonry/ImageMasonry.svelte';
  import openPhotoSwipe from './Photoswipe/index';
  import PhotoswipeTemplate from './Photoswipe/PhotoswipeTemplate.svelte';
  const allImages = import.meta.glob('/static/images/gallery/*.jpg');

  let element: HTMLElement;

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

  function onClick(event) {
    getImages().then((imgs) => {
      openPhotoSwipe(imgs, event.detail.index, (index) => {
        return element.querySelectorAll('[data-masonry-image]')[index];
      });
    });
  }
</script>

{#await getImages() then images}
  <div bind:this={element}>
    <ImageMasonry {images} targetRowHeight={300} on:image-click={onClick} let:image />
  </div>
{/await}
<PhotoswipeTemplate />
