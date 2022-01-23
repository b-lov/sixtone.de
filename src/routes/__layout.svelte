<script lang="ts">
  import Footer from '$lib/sections/Footer.svelte';
  import Header from '$lib/sections/Header.svelte';
  import NavMenu from '$lib/sections/NavMenu.svelte';
  import '../app.css';

  let navMenu: boolean;
</script>

<div class="bg-neutral-800">
  <NavMenu bind:open={navMenu} />
  <Header bind:navMenu />
  <slot />
  <Footer />
</div>
