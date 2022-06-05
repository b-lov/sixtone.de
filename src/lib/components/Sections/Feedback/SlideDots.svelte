<script lang="ts">
  export let dots;
  export let current;
</script>

<div class="flex gap-2 items-center justify-center">
  {#each dots as dot, i}
    <div
      class="
        {i === current ? 'bg-accent h-3 w-3' : 'bg-white h-2 w-2'}
        rounded-full transition duration-300
      "
    />
  {/each}
</div>
