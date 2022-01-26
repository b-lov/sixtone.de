<script lang="ts">
  let hovering: boolean;
  let pressed: boolean = false;
</script>

<div
  class="cursor-pointer w-10 h-8 flex flex-col justify-around items-end transition-all "
  class:pressed
  on:mouseenter={() => (hovering = true)}
  on:mouseleave={() => (hovering = false)}
  on:click={() => (pressed = !pressed)}
>
  <span class={hovering ? 'w-full' : 'w-5/6'} />
  <span class={hovering ? 'w-full' : 'w-3/5'} />
  <span class="w-full" />
</div>

<style lang="postcss">
  span {
    @apply bg-white transition-all duration-200 ease-in-out origin-left;
    height: 1px;
  }
  .pressed span:nth-child(1) {
    width: 100%;
    transform: translate(6px, -3.5px) rotate(45deg);
  }
  .pressed span:nth-child(2) {
    opacity: 0;
  }
  .pressed span:nth-child(3) {
    width: 100%;
    transform: translate(6px, 3.5px) rotate(-45deg);
  }
  .pressed:hover {
    transform: scale(1.25);
    transition-duration: 200ms;
  }
</style>
