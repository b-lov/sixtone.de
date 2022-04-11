<script lang="ts">
  import SectionWrapper from '../SectionWrapper.svelte';
  import Player from './Player.svelte';

  export let componentData;
  export let sounds;
</script>

<SectionWrapper {componentData} sectionClass="pb-0">
  <div class="flex items-center justify-center">
    <div class="w-full grid grid-cols-5 grid-rows-1 gap-3">
      <div
        class="hidden sm:block col-span-2 bg-cover bg-right"
        style="background-image: url('images/sounds/music.jpg');"
      />
      <div class="col-span-5 sm:col-span-3 flex flex-col gap-3">
        {#each sounds as { title, src }}
          <Player {title} {src} />
        {/each}
      </div>
    </div>
  </div>
</SectionWrapper>
