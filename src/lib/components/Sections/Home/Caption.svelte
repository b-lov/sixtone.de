<script lang="ts">
  const caption = [
    { text: 'music', fat: true, accent: true },
    { text: 'is', fat: false, accent: true },
    { text: 'what', fat: false, accent: true },
    { text: 'feelings', fat: false, accent: false },
    { text: 'sound', fat: false, accent: true },
    { text: 'like', fat: true, accent: true }
  ];
</script>

<div
  class="
    flex flex-row flex-wrap justify-center gap-4 tracking-[.25em] font-oswald text-4xl uppercase
    text-neutral-300 font-extralight relative
  "
>
  {#each caption as { text, fat, accent }}
    <span class="{fat && 'font-bold'} {accent && 'text-accent'}">{text}</span>
  {/each}
</div>
