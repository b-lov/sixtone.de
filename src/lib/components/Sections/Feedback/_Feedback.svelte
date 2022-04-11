<script lang="ts">
  import SlideDots from './SlideDots.svelte';
  import SlideText from './SlideText.svelte';
  import SlideAuthor from './SlideAuthor.svelte';
  import SectionWrapper from '../SectionWrapper.svelte';
  import { fly } from 'svelte/transition';
  import { onMount } from 'svelte';

  export let componentData;
  export let feedbacks;

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

<SectionWrapper
  {componentData}
  backgroundClass="bg-[position:17%] bg-[length:242%] sm:bg-cover sm:bg-top"
>
  <div class="relative flex-1 flex items-center">
    <div class="w-full flex flex-col items-center">
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
</SectionWrapper>
