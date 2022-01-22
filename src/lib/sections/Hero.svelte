<script lang="ts">
  import ScrollIndicator from '$lib/components/ScrollIndicator.svelte';

  const bgImage: string = 'millerbg.jpg';
</script>

<div
  class="pt-64 h-screen bg-[url('/images/millerbg.jpg')] bg-cover bg-center flex items-center justify-center flex-col gap-32"
>
  <img src="/logos/sixtone.png" alt="" class="absolute top-16 opacity-5 w-full" />
  <div
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
