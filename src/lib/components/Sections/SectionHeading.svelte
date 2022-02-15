<script lang="ts">
  export let section: string = 'dummy';
  import { navMenuOpen } from '$lib/stores';
</script>

<div class="flex items-center py-6">
  <div class="w-full h-0.5 bg-neutral-600 ml-6" />
  <h1
    class="
      text-white/70 text-4xl tracking-[.2em] font-bold p-6 
      first-letter:text-accent
    "
  >
    {section}
  </h1>
  <div class="w-full h-0.5 bg-neutral-600 mr-6" />
</div>
