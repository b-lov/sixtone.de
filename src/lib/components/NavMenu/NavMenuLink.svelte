<script lang="ts">
  import { fly } from 'svelte/transition';
  import { currentSection } from '$lib/stores';
  export let section: string;
  export let flyDelay: number;
  let underline: boolean;
</script>

<button
  in:fly={{ x: 300, delay: flyDelay, opacity: 1 }}
  on:click={() => {
    document.getElementById(section).scrollIntoView({
      behavior: 'smooth'
    });
  }}
  class="relative text-3xl font-bold tracking-widest transition-all
    {section === $currentSection ? 'text-accent' : 'text-white'}"
  on:mouseenter={() => (underline = true)}
  on:mouseleave={() => (underline = false)}
>
  {section}
  {#if underline}
    <span
      class="w-full h-0.5 bg-accent absolute block"
      in:fly={{ x: -30, duration: 150 }}
      out:fly={{ x: 30 }}
    />
  {/if}
</button>
