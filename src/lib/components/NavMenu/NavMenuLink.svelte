<script lang="ts">
  import { fly } from 'svelte/transition';
  export let section: string;
  let underline: boolean;
  export let flyDelay: number;
  export let accent: boolean;
</script>

<button
  in:fly={{ x: 300, delay: flyDelay, opacity: 1 }}
  on:click={() => {
    document.getElementById(section).scrollIntoView({
      behavior: 'smooth'
    });
  }}
  class="relative text-3xl font-bold tracking-widest transition-all
    {accent ? 'text-accent' : 'text-white'}"
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
