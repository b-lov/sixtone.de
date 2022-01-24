<script lang="ts">
  import { fly } from 'svelte/transition';
  export let section: string;
  let underline: boolean;
</script>

<button
  on:click={() => {
    document.getElementById(section).scrollIntoView({
      behavior: 'smooth'
    });
  }}
  class="relative text-3xl font-bold tracking-widest text-white"
  on:mouseenter={() => (underline = true)}
  on:mouseleave={() => (underline = false)}
>
  {section}
  {#if underline}
    <span
      class="w-full h-0.5 bg-amber-600 absolute block"
      in:fly={{ x: -30 }}
      out:fly={{ x: 30 }}
    />
  {/if}
</button>
