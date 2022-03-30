<script lang="ts">
  import SectionWrapper from '../SectionWrapper.svelte';
  import Player from './Player.svelte';
  import tracks from './tracks';
  export let componentData;
</script>

<SectionWrapper {componentData} sectionClass="pb-0">
  <div class="flex items-center justify-center">
    <div class="w-full grid grid-cols-5 grid-rows-1 gap-3">
      <div
        class="hidden sm:block col-span-2 bg-[url('/static/images/sounds/music.jpg')] bg-cover bg-right"
      />
      <div class="col-span-5 sm:col-span-3 flex flex-col gap-3">
        {#each tracks as { name, src }}
          <Player {name} {src} />
        {/each}
      </div>
    </div>
  </div>
</SectionWrapper>
