<script lang="ts">
  import sounds from './sounds';
</script>

<div class="flex items-center justify-center px-16">
  <div class="w-full grid grid-cols-5 gap-8">
    <div class="col-span-2">
      <img src="images/music.jpg" class="w-full h-full object-cover object-right" alt="" />
    </div>
    <div class="col-span-3 flex flex-col gap-1">
      {#each sounds as sound, i}
        <div class="h-24 bg-neutral-800 py-4 px-6">
          <h1 class="text-neutral-400 text-sm font-light">{i + 1}. {sound.name}</h1>
        </div>
      {/each}
    </div>
  </div>
</div>
