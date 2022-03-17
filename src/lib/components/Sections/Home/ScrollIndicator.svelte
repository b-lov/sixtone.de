<div class="h-16 {$$props.class}">
  <div class="relative w-7 h-7 rotate-45">
    {#each [1, 2, 3] as item}
      <span
        class="
          absolute left-0 top-0 w-full h-full box-border border-b border-r border-white
          border-solid first:-top-3 first:-left-3 last:top-3 last:left-3
        "
        style="animation-delay: {item * 0.2}s;"
      />
    {/each}
  </div>
</div>

<style lang="postcss">
  span {
    animation: animate 1s linear infinite;
  }
  @keyframes animate {
    20% {
      border-color: #fff;
      transform: translate(12px, 12px);
    }
    20.1%,
    100% {
      @apply border-accent;
    }
  }
</style>
