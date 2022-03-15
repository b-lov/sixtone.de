<script lang="ts">
  // export let dotSize = 2;
  // export let dotOpacity = 0.6;
  export let bgOpacity = 0;
</script>

<div class="absolute h-full w-full" style="background-color: rgb(23, 23, 23, {bgOpacity});">
  <!-- <svg width="100%" height="100%">
    <defs>
      <pattern
        id="polka-dots"
        x="0"
        y="0"
        width={dotSize}
        height={dotSize}
        patternUnits="userSpaceOnUse"
      >
        <circle
          fill="#black"
          fill-opacity={dotOpacity}
          cx={dotSize / 2}
          cy={dotSize / 2}
          r={dotSize / 3}
        />
      </pattern>
    </defs>
    <rect x="0" y="0" width="100%" height="100%" fill="url(#polka-dots)" />
  </svg> -->
</div>

<style lang="postcss">
  div {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='3.5' height='3.5' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.8' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  }
</style>
