<script lang="ts">
  import { bigHeader } from '$lib/stores';
  import { clickOutside } from '$lib/actions';
  import socialMediaLinks from './social-media-links';

  import Icons from '../Icons.svelte';

  let expanded = false;
</script>

<div
  class="
    {!expanded && `-translate-y-64`}
    absolute top-0 left-0 flex flex-col items-center transition-transform
    md:static md:flex-row md:translate-y-0
  "
  use:clickOutside={() => (expanded = false)}
>
  {#each socialMediaLinks as { name, href }}
    <a
      {href}
      target="_blank"
      rel="noopener noreferrer"
      class="h-16 w-16 md:w-14 flex items-center justify-center bg-neutral-800 md:bg-transparent"
    >
      <Icons {name} size={1.2} class="fill-neutral-300 hover:fill-accent transition-colors" />
    </a>
  {/each}
  <button
    class="
      {!expanded && $bigHeader ? 'h-24' : 'h-16'} {expanded && 'bg-neutral-800'}
      w-16 flex items-center justify-center transition-all duration-300 rounded-b-full
      md:hidden
    "
    on:click={() => (expanded = !expanded)}
  >
    {#key expanded}
      <Icons
        size={1.5}
        name={expanded ? 'up-arrow' : 'link'}
        class="stroke-neutral-300 stroke-2 fill-[none] transition"
      />
    {/key}
  </button>
</div>
