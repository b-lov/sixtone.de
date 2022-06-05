<script>
  import Icons from '../Icons.svelte';

  let expanded = false;
</script>

<div
  class="flex p-4 gap-4 transition-transform {expanded ? 'translate-x-0' : 'translate-x-[104px]'}"
>
  <button on:click={() => (expanded = !expanded)}>
    <Icons name="flag_de" size={2} />
  </button>
  <button on:click={() => (expanded = false)}>
    <Icons name="flag_ru" size={2} />
  </button>
  <button on:click={() => (expanded = false)}>
    <Icons name="flag_gb" size={2} />
  </button>
</div>

<style lang="postcss">
  button {
    @apply flex rounded-full border-2 border-neutral-300 overflow-hidden;
  }
</style>
