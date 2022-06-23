<script lang="ts">
  import SlideDots from './SlideDots.svelte';
  import SlideText from './SlideText.svelte';
  import SlideAuthor from './SlideAuthor.svelte';
  import SectionWrapper from '../SectionWrapper.svelte';
  import { onMount } from 'svelte';

  export let data;
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
  id={data.id}
  name={data.name}
  subtitle={data.subtitle}
  bgImage={data.bgImage}
  backgroundClass="bg-[position:17%] bg-[length:242%] sm:bg-cover sm:bg-top"
>
  <div class="relative">
    <div class="grid overflow-hidden">
      {#each feedbacks as feedback, i}
        <div class="row-span-full col-span-full {i === current ? 'appear' : 'disappear'}">
          <SlideAuthor picture={feedback.picture} name={feedback.name} />
          <SlideText text={feedback.text} />
        </div>
      {/each}
    </div>
    <SlideDots dots={feedbacks} {current} />
  </div>
</SectionWrapper>

<style lang="postcss">
  .appear {
    animation: fadeIn 0.5s ease-out forwards;
  }
  .disappear {
    animation: fadeOut 0.5s ease-out forwards;
  }

  @keyframes fadeIn {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes fadeOut {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }
</style>
