<script lang="ts">
  export let text;
</script>

<button
  on:click
  on:mousedown
  class="
    font-oswald font-light text-white uppercase text-xs border-[1px] p-3 px-4 tracking-widest
    rounded-sm border-neutral-400 hover:bg-accent hover:border-accent transition
    duration-300
  "
>
  {text}
</button>
