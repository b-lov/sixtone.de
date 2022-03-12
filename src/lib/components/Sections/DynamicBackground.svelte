<script lang="ts">
  export let image: string;
  export let opacity: number = 0.7;
  let dotOverlay: string =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAAXNSR0IArs4c6QAAABRJREFUGFdjZGBg+M/AwMDIyAAFAA4pAQP4L554AAAAAElFTkSuQmCC';
</script>

<div class="absolute w-full h-full top-0">
  <div class="relative w-full h-full overflow-hidden">
    <div
      class="absolute w-full h-full bg-cover bg-fixed bg-center scale-110"
      style="background-image: url(/images/backgrounds/{image}.jpg);"
    />
    <div class="absolute h-full w-full bg-neutral-900" style="opacity: {opacity};" />
    <div class="absolute h-full w-full" style="background-image: url({dotOverlay});" />
  </div>
</div>
