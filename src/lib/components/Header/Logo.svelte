<script lang="ts">
  const src: string = 'logos/sixtone.svg';
  export let collapsed: boolean = false;
</script>

<span
  class="{collapsed &&
    'scale-75'} cursor-pointer text-white font-rim text-2xl pt-2 transition-transform duration-300 "
  on:click={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
>
  Sixtone
</span>
