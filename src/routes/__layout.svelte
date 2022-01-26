<script lang="ts">
  import Footer from '$lib/components/Footer.svelte';
  import Header from '$lib/components/Header/_Header.svelte';
  import NavMenu from '$lib/components/NavMenu/_NavMenu.svelte';
  import '../app.css';
</script>

<div class="bg-neutral-800">
  <NavMenu />
  <Header />
  <slot />
  <Footer />
</div>
