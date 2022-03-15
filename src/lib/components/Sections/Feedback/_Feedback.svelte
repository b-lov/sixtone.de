<script lang="ts">
  import feedbacks from './feedbacks';
  import { fly } from 'svelte/transition';
  import { onMount } from 'svelte';

  import SlideDots from './SlideDots.svelte';
  import SlideText from './SlideText.svelte';
  import SlideAuthor from './SlideAuthor.svelte';

  let current = 0;
  const changeInterval = 5000;

  const changeSlide = () => {
    if (current === feedbacks.length - 1) {
      current = 0;
    } else {
      current += 1;
    }
  };

  onMount(() => {
    let timer = setInterval(() => changeSlide(), changeInterval);
    return () => clearInterval(timer);
  });
</script>

<div class="relative flex-1 flex items-center max-w-7xl mx-auto">
  <div class="w-full flex flex-col items-center px-24">
    <div class="grid grid-cols-1 grid-rows-1">
      {#key current}
        <div
          class="row-start-1 col-start-1"
          in:fly={{ x: window.innerWidth }}
          out:fly={{ x: -window.innerWidth }}
        >
          <SlideAuthor picture={feedbacks[current].picture} name={feedbacks[current].name} />
          <SlideText text={feedbacks[current].text} />
        </div>
      {/key}
    </div>
    <SlideDots dots={feedbacks} {current} />
  </div>
</div>
