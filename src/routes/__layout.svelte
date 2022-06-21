<script lang="ts" context="module">
  export async function load({ fetch }) {
    const res = await fetch('/data.json');
    const data = await res.json();
    return { props: { sectionData: data.sectionData } };
  }
</script>

<script lang="ts">
  import '../app.css';
  import Footer from '$lib/components/Footer.svelte';
  import Header from '$lib/components/Header/_Header.svelte';
  import NavMenu from '$lib/components/NavMenu/_NavMenu.svelte';
  import { bigHeader } from '$lib/stores';
  import { useViewport } from '$lib/actions';
  import { setContext } from 'svelte';

  export let sectionData;
  setContext('sectionData', sectionData);
</script>

<svelte:head>
  <!-- TODO: get node module -->
  <script src="https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js"></script>
</svelte:head>

<div
  use:useViewport={{ rootMargin: '10% 0% -110% 0%' }}
  on:enterViewport={() => bigHeader.set(false)}
  on:exitViewport={() => bigHeader.set(true)}
>
  <NavMenu {sectionData} />
  <Header />
  <main class="bg-neutral-900 text-neutral-300 overflow-hidden">
    <slot />
  </main>
  <Footer />
</div>
