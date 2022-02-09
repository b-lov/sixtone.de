<script lang="ts">
  let scrollY: number;
</script>

<svelte:window bind:scrollY />

<div
  style="transform:
    translateY(-{scrollY / 2}px)
    scale({1 + scrollY * 0.0005})
  ;"
  class="fixed -z-10 w-screen top-0"
>
  <div
    id="picture"
    class="h-screen bg-cover bg-right bg-neutral-800/70 bg-blend-multiply "
    style="background-image: url(/images/bg1.jpg);"
  />
  <div
    id="dot-overlay"
    class="absolute h-full w-full top-0"
    style="background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAAXNSR0IArs4c6QAAABRJREFUGFdjZGBg+M/AwMDIyAAFAA4pAQP4L554AAAAAElFTkSuQmCC);"
  />
</div>
