<script lang="ts">
  const name: string = 'sixtone';
</script>

<div class="absolute opacity-[0.12] top-[30%] flex justify-between lg:top-[20%] -left-4 -right-4">
  {#each [...name] as item}
    <span
      class="text-white text-8xl font-extrabold uppercase select-none cursor-default leading-none"
    >
      {item}
    </span>
  {/each}
</div>

<style lang="postcss">
  span {
    font-size: 4rem;
    font-size: clamp(4rem, 0.7999999999999998rem + 16vw, 20rem);
  }
</style>
