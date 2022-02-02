<script lang="ts">
  import { fly } from 'svelte/transition';
  import Hamburger from './Hamburger.svelte';
  import Logo from './Logo.svelte';
  import SocialMediaIcons from './SocialMediaIcons.svelte';
  import Icons from '../Icons.svelte';

  let scrollY: number;
</script>

<svelte:window bind:scrollY />
{#if scrollY != undefined}
  <header
    transition:fly={{ duration: 100, y: -20 }}
    class="{scrollY > 40 ? 'h-16 py-2.5 shadow-lg' : 'bg-opacity-0 h-24 py-3'}
      fixed bg-neutral-800 w-full flex items-center justify-between px-6 z-10
      transition-scale duration-300"
  >
    <!-- Left -->
    <div class="flex flex-row items-center gap-10 grow basis-0">
      <Icons
        search
        size={1.5}
        class="fill-white hover:scale-125 transition-transform cursor-pointer"
      />
      <SocialMediaIcons />
    </div>
    <!-- Center -->
    <Logo collapsed={scrollY > 40} />
    <!-- Right -->
    <div class="flex justify-end grow basis-0">
      <Hamburger />
    </div>
  </header>
{/if}
