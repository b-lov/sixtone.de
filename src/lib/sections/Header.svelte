<script lang="ts">
  import { fly } from 'svelte/transition';
  import Hamburger from '$lib/components/Hamburger.svelte';
  import Icon from '$lib/components/Icon.svelte';
  import Logo from '$lib/components/Logo.svelte';

  export let navMenu: boolean;
  let scrollY: number;
</script>

<svelte:window bind:scrollY />
{#if scrollY != undefined}
  <header
    transition:fly={{ duration: 100, y: -20 }}
    class="{scrollY > 40
      ? 'h-16 py-2'
      : 'bg-opacity-0 h-24 py-3'} fixed bg-neutral-800 w-full flex items-center justify-between
px-6 z-10 transition-all duration-300"
  >
    <Icon lnr-magnifier />
    <Logo />
    <Hamburger bind:pressed={navMenu} />
  </header>
{/if}
