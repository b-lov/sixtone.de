<script lang="ts">
  import SectionWrapper from '../SectionWrapper.svelte';

  import imageData from './image-data';
  import Masonry from './Masonry.svelte';

  export let componentData;
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

<SectionWrapper {componentData} sectionClass="pb-0" containerClass="max-w-none px-0">
  <Masonry rawImages={imageData} />
</SectionWrapper>
