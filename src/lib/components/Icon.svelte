<script lang="ts">
  export let name: string;
  let src = `/icons/${name}.svg`;
  export let size: number = 1.5;
</script>

<img {src} alt="{name} icon" style="height: {size}rem" class={$$props.class} />
