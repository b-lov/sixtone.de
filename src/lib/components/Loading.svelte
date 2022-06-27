<div class="flex gap-3">
  {#each [...Array(3).keys()] as dot}
    <div class="dot" style="animation-delay: 0.{dot * 2}s;" />
  {/each}
</div>

<style lang="postcss">
  .dot {
    @apply bg-accent w-4 h-4 rounded-full;
    animation: slide 1.4s infinite;
  }
  @keyframes slide {
    0% {
      transform: scale(1);
    }
    50% {
      opacity: 0.3;
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
