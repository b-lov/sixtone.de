<script lang="ts">
  import ImageMasonry from './Masonry/ImageMasonry.svelte';
  import openPhotoSwipe from './Photoswipe/index';
  import PswpTemplate from './Photoswipe/PswpTemplate.svelte';

  let element: HTMLElement;

  const getImages = async () => {
    const Images = [];
    const allImages = import.meta.glob('/static/images/gallery/*.jpg');
    for (let image in allImages) {
      const dataPath = `${image}?meta&imagetools`;
      await import(/* @vite-ignore */ dataPath).then(({ width, height }) => {
        Images.push({
          src: image.replace('gallery/', 'gallery/small/'),
          // src: image,
          original: image,
          width,
          height,
          title: 'Lorem ipsum dolor'
        });
      });
    }
    return Images;
  };

  function onClick(event) {
    // create array compatible with PhotoSwipe
    const imgs = getImages().then((images) =>
      images.map(({ src, width, height, original, title }) => {
        return {
          src: original,
          msrc: src,
          w: width,
          h: height,
          title
        };
      })
    );

    imgs.then((imgs) => {
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
<PswpTemplate />
