<script lang="ts">
  const src: string = 'logos/sixtone.svg';
</script>

<img
  {src}
  alt="Logo"
  class="h-full cursor-pointer"
  on:click={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
/>
