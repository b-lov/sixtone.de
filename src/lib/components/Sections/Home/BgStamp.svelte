<script lang="ts">
  const name: string = 'sixtone';
</script>

<div class="absolute opacity-[0.12] top-[25%] flex justify-between items-center w-[107%]">
  {#each [...name] as item}
    <span
      class="text-white text-[12rem] font-extrabold uppercase select-none cursor-default leading-none"
    >
      {item}
    </span>
  {/each}
</div>
