<script lang="ts">
  import DynamicBackground from '../DynamicBackground.svelte';
  import SlideDots from './SlideDots.svelte';
  import { fly, slide } from 'svelte/transition';
  import SlideText from './SlideText.svelte';
  import SlideAuthor from './SlideAuthor.svelte';
  import { onMount } from 'svelte';

  const reviews = [
    {
      name: 'Ben Johnson',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, aperiam hic quo deleniti modi sit vel recusandae voluptatum, nobis, dicta porro debitis asperiores beatae quia. Autem beatae est omnis quod!',
      picture: 'images/feedback/profile1.jpg'
    },
    {
      name: 'Emma Hermann',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo at nisi possimus. Exercitationem explicabo alias ratione esse adipisci itaque debitis, officia ipsam quasi laborum dicta? Aspernatur illum voluptate quae? Assumenda?',
      picture: 'images/feedback/profile2.jpg'
    },
    {
      name: 'Jim Beam',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint voluptas eligendi veritatis ab. Quibusdam sed voluptates laudantium inventore. Nisi eaque sint quibusdam. Delectus, deserunt voluptatem ratione quae corporis dolorem!',
      picture: 'images/feedback/profile3.jpg'
    },
    {
      name: 'Jennifer Fox',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum facilis exercitationem vel placeat aperiam culpa fugit qui aspernatur consectetur! Quia impedit ipsum delectus temporibus. Alias magni quae vel similique odit?',
      picture: 'images/feedback/profile4.jpg'
    }
  ];

  let current = 0;

  const changeSlide = () => {
    if (current === reviews.length - 1) {
      current = 0;
    } else {
      current += 1;
    }
  };

  onMount(() => {
    let timer = setInterval(() => changeSlide(), 5000);
    return () => clearInterval(timer);
  });
</script>

<div class="flex-1 flex items-center ">
  <div class="relative w-full flex flex-col items-center px-24 py-24 overflow-hidden">
    <DynamicBackground imagePath="feedback/bg" opacity={0.7} />
    <div class="transition-container">
      {#key current}
        <div class="z-[1]" in:fly={{ x: window.innerWidth }} out:fly={{ x: -window.innerWidth }}>
          <SlideAuthor picture={reviews[current].picture} name={reviews[current].name} />
          <SlideText text={reviews[current].text} />
        </div>
      {/key}
    </div>
    <SlideDots dots={reviews} {current} />
  </div>
</div>

<style lang="postcss">
  .transition-container {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
  }

  .transition-container > * {
    grid-row: 1;
    grid-column: 1;
  }
</style>
