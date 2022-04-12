<script lang="ts">
  import Button from '$lib/components/Button.svelte';

  export let newsItem: {
    picture: string;
    title: string;
    datum: string;
    author: string;
    text: string;
  };

  const { picture, title, datum, author, text } = newsItem;
</script>

<div style="background-image: url({picture});" class="max-w-sm shadow-lg bg-top bg-cover">
  <div
    class="
          w-full h-full flex flex-col justify-center items-center px-8 py-12 bg-neutral-800
          bg-opacity-80 text-neutral-400 gap-16
        "
  >
    <div class="flex flex-col items-center gap-2">
      <a href="#blank" on:click|preventDefault>
        <h1
          class="font-oswald uppercase text-2xl font-light text-white hover:text-accent transition"
        >
          {title}
        </h1>
      </a>
      <div class="italic font-light text-sm">{datum} von {author}</div>
    </div>
    <div class="text-center">{text}</div>
    <Button text="mehr lesen" />
  </div>
</div>
