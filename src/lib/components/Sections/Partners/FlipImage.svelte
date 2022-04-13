<script lang="ts">
  export let picture: string;
  export let name: string;
  export let flipped: boolean;
</script>

<div class="scene">
  <div class="card" class:flipped>
    <img src={picture} alt={name} class="front md:grayscale" />
    <img src={picture} alt={name} class="back" />
  </div>
</div>

<style lang="postcss">
  .scene {
    perspective: 1000px;
  }
  .card {
    @apply w-48 h-48 relative;
    transition: transform 0.7s;
    transform-style: preserve-3d;
  }
  .flipped {
    transform: rotateY(180deg);
  }
  .front,
  .back {
    @apply absolute h-full w-full object-cover rounded-full;
    backface-visibility: hidden;
  }
  .front {
    /* filter: grayscale(100%); */
  }
  .back {
    transform: rotateY(180deg);
  }
</style>
