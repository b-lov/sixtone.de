<script lang="ts">
  import '../app.css';

  import { bigHeader } from '$lib/stores';
  import { useViewport } from '$lib/actions';

  import Footer from '$lib/components/Footer.svelte';
  import Header from '$lib/components/Header/_Header.svelte';
  import NavMenu from '$lib/components/NavMenu/_NavMenu.svelte';
</script>

<svelte:head>
  <script src="https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js"></script>
</svelte:head>

<div
  use:useViewport={{ rootMargin: '10% 0% -110% 0%' }}
  on:enterViewport={() => bigHeader.set(false)}
  on:exitViewport={() => bigHeader.set(true)}
>
  <NavMenu />
  <Header />
  <main class="bg-neutral-900 text-neutral-300">
    <slot />
  </main>
  <Footer />
</div>
