<script lang="ts">
  import { fly } from 'svelte/transition';
  import { bigHeader } from '$lib/stores';
  import Hamburger from './Hamburger.svelte';
  import Logo from './Logo.svelte';
  import SocialMediaIcons from './SocialMediaIcons.svelte';
  import Icons from '../Icons.svelte';
</script>

<!-- wait till sections are loaded before loading header to avoid janky animation -->
{#if $bigHeader != undefined}
  <header
    transition:fly={{ duration: 100, y: -20 }}
    class="
      {$bigHeader ? 'bg-opacity-0 h-24 py-3' : 'h-16 py-2 shadow-lg'} fixed bg-neutral-800
      w-full flex items-center justify-between px-4 z-10 transition-scale duration-300
    "
  >
    <div class="flex flex-row items-center gap-10 grow basis-0">
      <SocialMediaIcons />
    </div>
    <Logo />
    <div class="flex items-center gap-8 justify-end grow basis-0">
      <button
        on:click={() => {
          window.scrollTo({
            top:
              document.getElementById('contact').getBoundingClientRect().top +
              window.pageYOffset -
              64,
            behavior: 'smooth'
          });
        }}
      >
        <Icons
          name="contact"
          size={1.6}
          class="hidden sm:block fill-[none] stroke-2 stroke-neutral-300 hover:scale-125 hover:stroke-accent transition"
        />
      </button>
      <Hamburger class="md:mr-4" />
    </div>
  </header>
{/if}
