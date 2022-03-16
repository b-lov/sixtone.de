<script lang="ts">
  import { navMenuOpen } from '$lib/stores';
  let hovering: boolean;
  const toggleMenu = () => {
    navMenuOpen.update((n) => {
      return (n = !n);
    });
  };
</script>

<button
  id="Hamburger"
  class="w-10 h-8 flex flex-col justify-around items-end transition-all {$$props.class}"
  class:pressed={$navMenuOpen}
  on:mouseenter={() => (hovering = true)}
  on:mouseleave={() => (hovering = false)}
  on:click={() => toggleMenu()}
>
  <span class={hovering ? 'w-full' : 'w-5/6'} />
  <span class={hovering ? 'w-full' : 'w-3/5'} />
  <span class="w-full" />
</button>

<style lang="postcss">
  span {
    @apply bg-white transition-all duration-200 ease-in-out origin-left;
    height: 2px;
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
