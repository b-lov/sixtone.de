<script lang="ts">
  import DotOverlay from '../DotOverlay.svelte';

  export let bgImage: string = '';
  export let opacity: number = 0.6;
</script>

<div
  class="absolute w-full h-full bg-fixed bg-no-repeat bg-black {$$props.class}"
  style="background-image: url({bgImage});"
/>
<DotOverlay bgOpacity={opacity} />
