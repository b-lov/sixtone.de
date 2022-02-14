<script lang="ts">
  import Footer from '$lib/components/Footer.svelte';
  import Header from '$lib/components/Header/_Header.svelte';
  import NavMenu from '$lib/components/NavMenu/_NavMenu.svelte';
  import '../app.css';
  import { bigHeader } from '$lib/stores';
  import { useViewport } from '$lib/actions';
</script>

<div
  use:useViewport={{ rootMargin: '10% 0% -110% 0%' }}
  on:enterViewport={() => bigHeader.set(false)}
  on:exitViewport={() => bigHeader.set(true)}
  class="bg-neutral-900"
>
  <NavMenu />
  <Header />
  <slot />
  <Footer />
</div>
