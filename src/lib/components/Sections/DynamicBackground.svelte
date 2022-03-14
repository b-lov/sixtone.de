<script lang="ts">
  import DotOverlay from '../DotOverlay.svelte';

  export let image: string;
  export let opacity: number = 0.6;
</script>

<div
  class="absolute w-full h-full bg-cover bg-center bg-fixed"
  style="background-image: url(images/backgrounds/{image}.jpg);"
/>
<DotOverlay bgOpacity={opacity} />
