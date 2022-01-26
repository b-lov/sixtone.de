<script lang="ts">
  // first dynamic prop MUST be icon name from static folder
  let name = Object.keys($$props)[0];
  let src = `/icons/${name}.svg`;
  export let size: number = 1.5;
</script>

<img {src} alt={`${name} icon`} style={`height: ${size}rem`} class={$$props.class} />
