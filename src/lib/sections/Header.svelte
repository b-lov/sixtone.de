<script lang="ts">
  import NavButton from '$lib/components/NavButton.svelte';
  import Icon from '$lib/components/Icon.svelte';
  import Logo from '$lib/components/Logo.svelte';

  let y: number;
  export let navMenu: boolean;
</script>

<svelte:window bind:scrollY={y} />

<header
  class="{y > 40 ? 'bg-opacity-80 h-16 py-2' : 'bg-opacity-0 h-24 py-3'}
    fixed bg-neutral-800 w-full flex items-center justify-between px-6 z-10 transition-all duration-300"
>
  <Icon lnr-magnifier />
  <Logo />
  <NavButton bind:pressed={navMenu} />
</header>
