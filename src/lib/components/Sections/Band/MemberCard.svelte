<script lang="ts">
  import { fly } from 'svelte/transition';

  export let member;

  let background = false;

  const randomFly = () => {
    return (Math.random() - 0.5) * 2000;
  };
</script>

<div class="flex flex-col items-center {$$props.class}">
  <div
    class="relative mb-3"
    on:mouseenter={() => (background = true)}
    on:mouseleave={() => (background = false)}
  >
    {#if background}
      <div
        in:fly={{ y: randomFly(), x: randomFly() }}
        out:fly={{ y: randomFly(), x: randomFly() }}
        class="absolute rounded-full w-full h-full top-0 bg-accent/40"
      />
    {/if}
    <img
      src="images/band/third/{member.photo}.png"
      alt="{member.name} Photo"
      class="w-72 h-72 object-contain rounded-full object-top shadow-lg relative"
    />
  </div>
  <h1 class="font-oswald text-2xl text-neutral-200">{member.name}</h1>
  <h2 class="text-neutral-400 text-sm">{member.position}</h2>
</div>
