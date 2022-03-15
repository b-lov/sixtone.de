<script lang="ts">
  import Icons from '$lib/components/Icons.svelte';
  import FlipImage from './FlipImage.svelte';
  export let name;
  export let picture;
  export let link;
  let flipped = false;
</script>

<a href={link} target="_blank" class="mx-auto">
  <div
    class="flex flex-col gap-6 items-center"
    on:mouseenter={() => (flipped = true)}
    on:mouseleave={() => (flipped = false)}
  >
    <FlipImage {picture} {name} {flipped} />
    <h1
      class="
        {flipped ? 'text-accent' : 'text-neutral-300'}
        font-oswald uppercase tracking-wide transition duration-300 font-light
      "
    >
      {name}
      <Icons
        name="external_link"
        size={0.8}
        class="
          {flipped ? 'fill-accent' : 'fill-neutral-300'}
          inline-block mb-2 ml-0 transition duration-300
        "
      />
    </h1>
  </div>
</a>
