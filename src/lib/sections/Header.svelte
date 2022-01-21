<script>
  import Hamburger from '$lib/components/Hamburger.svelte';
  import Icon from '$lib/components/Icon.svelte';
  import Logo from '$lib/components/Logo.svelte';
</script>

<header
  class="fixed bg-neutral-800 bg-opacity-50 w-full flex items-center justify-between py-3 px-6"
>
  <Icon lnr-magnifier />
  <Logo />
  <Hamburger />
</header>
