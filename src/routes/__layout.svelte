<script>
  import Footer from '$lib/sections/Footer.svelte';
  import Header from '$lib/sections/Header.svelte';

  import '../app.css';
</script>

<div class="bg-neutral-800">
  <Header />
  <slot />
  <Footer />
</div>
