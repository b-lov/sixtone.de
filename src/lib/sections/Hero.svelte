<script lang="ts">
  import ScrollIndicator from '$lib/components/ScrollIndicator.svelte';
</script>

<div
  id="hero_wrapper"
  class="h-screen bg-[url('/images/bg1.jpg')] bg-cover bg-right bg-neutral-800
    bg-blend-multiply bg-opacity-80 flex items-center justify-between flex-col p-8"
>
  <div class="absolute h-full w-full top-0 overflow-hidden">
    <img id="stamp" src="/logos/sixtone.svg" alt="" class="opacity-10 w-full" />
  </div>
  <div id="dummy" />
  <div
    id="caption"
    class="flex flex-col items-end gap-4 tracking-[.25em] font-oswald text-4xl uppercase text-amber-600"
  >
    <div class="flex gap-4">
      <span class="font-bold">music</span>
      <span class="font-extralight">is</span>
      <span class="font-extralight ">what</span>
    </div>
    <span class="font-extralight text-white self-start">feelings</span>
    <div class="flex gap-4">
      <span class="font-extralight ">sound</span>
      <span class="font-bold">like</span>
    </div>
  </div>
  <ScrollIndicator />
</div>
