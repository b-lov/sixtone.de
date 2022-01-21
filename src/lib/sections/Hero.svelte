<script lang="ts">
  import ScrollIndicator from '$lib/components/ScrollIndicator.svelte';

  const bgImage: string = 'millerbg.jpg';
</script>

<div
  class="pt-72 h-screen bg-[url('/images/millerbg.jpg')] bg-cover bg-center flex items-center justify-center flex-col gap-40"
>
  <div class="flex gap-4 tracking-[.25em] font-oswald text-4xl uppercase text-amber-600">
    <span class="font-bold">beautifully</span>
    <span class="font-extralight">designed</span>
    <span class="font-extralight text-white">music</span>
    <span class="font-bold text-white">theme</span>
  </div>
  <ScrollIndicator />
</div>
