<script lang="ts">
  import Player from './Player.svelte';
  import tracks from './tracks';
</script>

<div class="flex items-center justify-center px-16 max-w-5xl mx-auto">
  <div class="w-full grid grid-cols-5 grid-rows-1 gap-3">
    <div class="col-span-2 bg-[url('images/music.jpg')] bg-cover bg-center" />
    <div class="col-span-3 flex flex-col gap-3">
      {#each tracks as { name, src }}
        <Player {name} {src} />
      {/each}
    </div>
  </div>
</div>
