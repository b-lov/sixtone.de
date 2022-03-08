<script lang="ts">
  let playing = false;
  const size = 1.2;
</script>

<button
  class="relative group"
  style="width: {size}rem; height: {size}rem"
  on:click={() => (playing = !playing)}
>
  <span
    style={playing
      ? 'clip-path: polygon(0 0, 30% 0, 30% 100%, 0% 100%);'
      : 'clip-path: polygon(0 0, 50% 25%, 50% 75%, 0% 100%);'}
  />
  <span
    style={playing
      ? 'clip-path: polygon(70% 0, 100% 0, 100% 100%, 70% 100%);'
      : 'clip-path: polygon(50% 25%, 100% 50%, 100% 50%, 50% 75%);'}
  />
</button>

<style lang="postcss">
  span {
    @apply w-full h-full absolute bg-neutral-200 top-0 left-0 group-hover:bg-accent
    transition-all duration-300;
  }
</style>
