<script lang="ts">
  import ProgressBar from './ProgressBar.svelte';

  export let name;
</script>

<div class="bg-neutral-800 py-4 px-6 flex flex-col gap-4">
  <h1 class="text-neutral-400 font-light">{name}</h1>
  <div class="flex">
    <ProgressBar />
  </div>
</div>
