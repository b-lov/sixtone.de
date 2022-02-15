<script lang="ts">
  import { navMenuOpen } from '$lib/stores';
  import DynamicBackground from '../DynamicBackground.svelte';
</script>

<div class="relative h-full flex justify-end">
  <DynamicBackground imagePath="bg4" />
  <h1
    class="text-accent text-6xl uppercase tracking-[.3em] font-bold
    transition-all duration-300 mt-6 opacity-60 {$navMenuOpen ? 'mr-72' : 'mr-6'}"
  >
    Team
  </h1>
</div>
