<script lang="ts">
  import Icons from '../Icons.svelte';

  export let id: string = '';
  export let name: string = '';
  export let subtitle: string = '';
</script>

<div class="py-16 text-neutral-300 text-center relative">
  <div class="flex items-center justify-center gap-2">
    <Icons name={id} size={2} class="stroke-2 stroke-neutral-300 fill-[none]" />
    <h1 class="text-5xl tracking-widest font-semibold first-letter:text-accent p-2">
      {name}
    </h1>
  </div>
  <h2 class="font-oswald font-light tracking-[0.2rem] p-2">{subtitle}</h2>
</div>
