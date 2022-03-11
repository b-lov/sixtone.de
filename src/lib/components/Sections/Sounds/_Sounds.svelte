<script lang="ts">
  import Player from './Player.svelte';
  import tracks from './tracks';
</script>

<div class="flex items-center justify-center px-16">
  <div class="w-full grid grid-cols-5 gap-2">
    <div class="col-span-2">
      <img src="images/music.jpg" class="w-full h-full object-cover object-right" alt="" />
    </div>
    <div class="col-span-3 flex flex-col gap-2">
      {#each tracks as { name, src }}
        <Player {name} {src} />
      {/each}
    </div>
  </div>
</div>
