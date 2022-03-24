<script lang="ts">
  import { fly } from 'svelte/transition';
  import { currentSection } from '$lib/stores';
  import { navMenuOpen } from '$lib/stores';

  import Icons from '../Icons.svelte';

  export let name: string;
  export let flyDelay: number;

  let underline: boolean;
</script>

<button
  in:fly={{ x: 300, delay: flyDelay, opacity: 1 }}
  on:click={() => {
    window.scrollTo({
      // section - headerheight
      top: document.getElementById(name).getBoundingClientRect().top + window.pageYOffset - 64,
      behavior: 'smooth'
    });
    navMenuOpen.set(false);
  }}
  class="
    relative flex items-center gap-4 text-3xl font-semibold tracking-widest transition-all
    {name === $currentSection ? 'text-accent' : 'text-white'}
  "
  on:mouseenter={() => (underline = true)}
  on:mouseleave={() => (underline = false)}
>
  <Icons
    {name}
    size={1.5}
    class="stroke-2 fill-[none] {name === $currentSection ? 'stroke-accent' : 'stroke-neutral-300'}"
  />
  {name}
  {#if underline}
    <span
      class="w-full h-0.5 bg-accent absolute block -bottom-1"
      in:fly={{ x: -30, duration: 150 }}
      out:fly={{ x: 30 }}
    />
  {/if}
</button>
