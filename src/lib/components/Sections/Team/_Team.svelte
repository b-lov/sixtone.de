<script lang="ts">
  import { navMenuOpen } from '$lib/stores';
</script>

<div class="h-full flex justify-end">
  <h1
    class="text-accent text-6xl uppercase tracking-[.3em] font-bold
    transition-all duration-300 mt-6 opacity-60 {$navMenuOpen ? 'mr-72' : 'mr-6'}"
  >
    Team
  </h1>
</div>
