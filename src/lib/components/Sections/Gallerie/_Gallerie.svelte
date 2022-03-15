<script lang="ts">
  import imageData from './image-data';
  import Masonry from './Masonry.svelte';
  // const allImages = import.meta.globEager('/static/images/gallery/*.jpg');
  // const imageArray = Object.keys(allImages).map((key) => {
  //   return `${key}?meta&imagetools`;
  // });

  // const getImages = async () => {
  //   const Images = [];
  //   for (const image of imageArray) {
  //     await import(image).then(({ width, height }) => {
  //       Images.push({
  //         src: image,
  //         msrc: image.replace('gallery/', 'gallery/small/'),
  //         w: width,
  //         h: height,
  //         title: 'Lorem ipsum dolor'
  //       });
  //     });
  //   }
  //   return Images;
  // };
</script>

<Masonry rawImages={imageData} />
<!-- {#await getImages() then rawImages}
  {console.log(rawImages)}
  <Masonry {rawImages} targetRowHeight={300} />
{/await} -->
