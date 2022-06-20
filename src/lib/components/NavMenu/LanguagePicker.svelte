<script>
  import { getWpData } from '$lib/utils';
  import { rawData, currentLocale } from '$lib/stores/wp-store';
  import Icons from '../Icons.svelte';

  let expanded = false;
  const languages = ['DE', 'RU', 'EN'];
</script>

<div
  class="flex p-4 gap-4 transition-transform {expanded ? 'translate-x-0' : 'translate-x-[104px]'}"
>
  <button on:click={() => (expanded = !expanded)}>
    {#key $currentLocale}
      <Icons name={`flag_${$currentLocale}`} size={2} />
    {/key}
  </button>
  {#each languages as language}
    {#if language !== $currentLocale}
      <button
        on:click={() => {
          currentLocale.set(language);
          expanded = false;
          getWpData($currentLocale, rawData);
        }}
      >
        <Icons name={`flag_${language}`} size={2} />
      </button>
    {/if}
  {/each}
</div>

<style lang="postcss">
  button {
    @apply flex rounded-full border-2 border-neutral-300 overflow-hidden;
  }
</style>
