<script lang="ts">
  export let paused: boolean;
  const size = 1.2;
</script>

<button class="relative group" style="width: {size}rem; height: {size}rem" on:click>
  <span
    style={!paused
      ? 'clip-path: polygon(0 0, 35% 0, 35% 100%, 0% 100%);'
      : 'clip-path: polygon(0 0, 50% 25%, 50% 75%, 0% 100%);'}
  />
  <span
    style={!paused
      ? 'clip-path: polygon(65% 0, 65% 0, 100% 0, 100% 100%, 65% 100%, 65% 100%);'
      : 'clip-path: polygon(45% 25%, 50% 25%, 100% 50%, 100% 50%, 50% 75%, 45% 75%);'}
  />
</button>

<style lang="postcss">
  span {
    @apply w-full h-full absolute bg-neutral-300 top-0 left-0 group-hover:bg-accent
    transition-all duration-300;
  }
</style>
