<script lang="ts">
  const name: string = 'sixtone';
</script>

<div
  class="
    absolute opacity-[0.12] top-[30%] -left-8 -right-6 center flex justify-between items-center
    sm:-left-16 sm:-right-12 lg:-right-16 lg:top-[20%] lg:-left-24
  "
>
  {#each [...name] as item}
    <span
      class="
        text-white text-8xl font-extrabold uppercase select-none cursor-default leading-none
        sm:text-[10rem] lg:text-[16rem] 
      "
    >
      {item}
    </span>
  {/each}
</div>
