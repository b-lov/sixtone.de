<script lang="ts">
  let hovering: boolean;
  let open: boolean = false;
</script>

<div
  class="cursor-pointer w-10 h-8 flex flex-col justify-around items-end transition-all "
  class:open
  on:mouseenter={() => (hovering = true)}
  on:mouseleave={() => (hovering = false)}
  on:click={() => (open = !open)}
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
  .open span:nth-child(1) {
    width: 100%;
    transform: translate(6px, -3.5px) rotate(45deg);
  }
  .open span:nth-child(2) {
    opacity: 0;
  }
  .open span:nth-child(3) {
    width: 100%;
    transform: translate(6px, 3.5px) rotate(-45deg);
  }
  .open:hover {
    transform: scale(1.2);
  }
</style>
