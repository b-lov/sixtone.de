<script lang="ts">
  let scrollY: number;
</script>

<svelte:window bind:scrollY />
<div
  class="absolute w-full h-full -z-10 top-0 bg-cover bg-right bg-fixed bg-neutral-800/70
    bg-blend-multiply"
  style="background-image: url(/images/bg1.jpg); background-position-y: -{scrollY / 2}px;"
>
  <div
    id="dot-overlay"
    class="h-full w-full"
    style="background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAAXNSR0IArs4c6QAAABRJREFUGFdjZGBg+M/AwMDIyAAFAA4pAQP4L554AAAAAElFTkSuQmCC);"
  />
</div>
