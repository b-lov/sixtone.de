<script lang="ts">
  import DotOverlay from '$lib/components/DotOverlay.svelte';

  export let member;
</script>

<div class="flex flex-col items-center {$$props.class}">
  <div class="relative">
    <!-- <DotOverlay /> -->
    <img
      src="images/band/{member.photo}.png"
      alt="{member.name} Photo"
      class="w-[15rem] h-[15rem] object-cover object-top mb-3 shadow-lg rounded-full"
    />
  </div>
  <h1 class="font-oswald text-2xl text-neutral-200">{member.name}</h1>
  <h2 class="text-neutral-400 text-sm">{member.position}</h2>
</div>
