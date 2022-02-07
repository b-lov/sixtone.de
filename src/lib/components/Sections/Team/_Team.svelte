<script lang="ts">
  const bgImg = '/images/bg4.jpg';
  import { navMenuOpen } from '$lib/stores';
</script>

<section id="Team" class="h-screen flex justify-end ">
  <h1
    class="text-accent text-6xl uppercase tracking-[.3em] font-bold
    transition-all duration-300 mt-6 opacity-60 {$navMenuOpen ? 'mr-72' : 'mr-6'}"
  >
    Team
  </h1>
</section>
