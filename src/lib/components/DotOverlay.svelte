<script lang="ts">
  // export let dotSize = 2;
  // export let dotOpacity = 0.6;
  export let bgOpacity = 0;
</script>

<div class="absolute h-full w-full" style="background-color: rgb(23, 23, 23, {bgOpacity});" />

<style lang="postcss">
  div {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='3.5' height='3.5' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.8' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  }
</style>
