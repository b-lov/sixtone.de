<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import { prevent_default } from 'svelte/internal';

  const news = [
    {
      title: 'Bla Bla Bla',
      datum: '16. November 2021',
      author: 'V. Miller',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi id esse quo culpa cupiditate laboriosam officiis...',
      picture: 'images/gallery/02.jpg'
    },
    {
      title: 'Neuer Post',
      datum: '13. Januar 2022',
      author: 'Miller',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi id esse quo culpa cupiditate laboriosam officiis...',
      picture: 'images/gallery/13.jpg'
    },
    {
      title: 'Hallo Freunde',
      datum: '3. März 2021',
      author: 'Miller',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi id esse quo culpa cupiditate laboriosam officiis...',
      picture: 'images/gallery/11.jpg'
    },
    {
      title: 'Ein guter Tag',
      datum: '05. Mai 2021',
      author: 'Miller',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi id esse quo culpa cupiditate laboriosam officiis...',
      picture: 'images/gallery/08.jpg'
    }
  ];
</script>

<div class="flex-1 grid gap-7 grid-cols-2 mx-auto">
  {#each news as item}
    <div
      style="background-image: url({item.picture});"
      class="shadow-lg bg-top bg-cover w-[350px] h-[400px]"
    >
      <div
        class="
          w-full h-full flex flex-col justify-center items-center p-4 bg-neutral-800
          bg-opacity-80 text-neutral-400 gap-8
        "
      >
        <div class="flex flex-col items-center gap-2">
          <a href="#blank" on:click|preventDefault>
            <h1
              class="font-oswald uppercase text-2xl font-light text-white hover:text-accent transition"
            >
              {item.title}
            </h1>
          </a>
          <div class="italic font-light text-sm">{item.datum} von {item.author}</div>
        </div>
        <div class="text-center">{item.text}</div>
        <Button text="mehr lesen" />
      </div>
    </div>
  {/each}
</div>
