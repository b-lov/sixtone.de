<script lang="ts">
  const name: string = 'sixtone';
</script>

<div class="absolute h-full w-full top-0 overflow-hidden flex flex-col justify-around items-center">
  <div class="flex justify-between items-center w-[107%]">
    {#each [...name] as item}
      <span class="text-white/10 text-[13rem] font-extrabold uppercase ">{item}</span>
    {/each}
  </div>
  <div class="dummy" />
</div>
