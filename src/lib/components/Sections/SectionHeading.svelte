<script lang="ts">
  export let name: string = 'dummy';
  export let subtitle: string = 'dummy';
</script>

<div class="py-16 text-neutral-300 text-center relative">
  <h1 class="text-5xl tracking-widest font-bold first-letter:text-accent p-2">
    {name}
  </h1>
  <h2 class="font-oswald font-light tracking-[0.2rem] p-2">{subtitle}</h2>
</div>
