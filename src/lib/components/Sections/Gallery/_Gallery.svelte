<script lang="ts">
  import { onMount } from 'svelte';

  let Images = [];

  onMount(async () => {
    const allImages = import.meta.glob('/static/images/gallery/**.jpg');
    for (let src in allImages) {
      const dataPath = `${src}?meta&imagetools`;
      await import(dataPath).then(({ width, height }) => {
        Images.push({ src, width, height });
      });
    }
  });

  console.log(Images);
</script>

<div class="h-96 bg-neutral-600" />
