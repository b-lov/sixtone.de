<script>
  import Icons from '../Icons.svelte';
  import { currentLanguage } from '$lib/stores';

  let expanded = false;
  const languages = ['DE', 'RU', 'EN'];
</script>

<div
  class="flex p-4 gap-4 transition-transform {expanded ? 'translate-x-0' : 'translate-x-[104px]'}"
>
  <button on:click={() => (expanded = !expanded)}>
    {#key $currentLanguage}
      <Icons name={`flag_${$currentLanguage}`} size={2} />
    {/key}
  </button>
  {#each languages as language}
    {#if language !== $currentLanguage}
      <button
        on:click={() => {
          currentLanguage.set(language);
          expanded = false;
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
