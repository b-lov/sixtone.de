<script lang="ts">
  import Icons from '../Icons.svelte';

  export let name: string = 'dummy';
  export let subtitle: string = 'dummy';
</script>

<div class="py-16 text-neutral-300 text-center relative">
  <div class="flex items-center justify-center">
    <Icons sounds size={2} class="stroke-2 stroke-neutral-300" />
    <h1 class="text-5xl tracking-widest font-medium first-letter:text-accent p-2">
      {name}
    </h1>
  </div>
  <h2 class="font-oswald font-light tracking-[0.2rem] p-2">{subtitle}</h2>
</div>
