<script lang="ts">
  import { fade } from 'svelte/transition';
  export let tooltipPosition: number;
  export let tooltipText: string;
</script>

<div
  class="
        absolute pb-1.5 bg-neutral-300 text-xs text-neutral-800 tracking-wide
        w-10 -ml-5 text-center select-none
      "
  style="
  bottom: {135}%;
  left: {tooltipPosition}%;
  clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 65% 75%, 50% 100%, 35% 75%, 0% 75%);
  "
  transition:fade={{ duration: 200 }}
>
  {tooltipText}
</div>
