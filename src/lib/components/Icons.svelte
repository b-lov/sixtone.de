<script lang="ts">
  // export let name: string;
  export let size: number = 1;
  const name = Object.keys($$props)[0];
  type iconType = Record<'name' | 'viewBox' | 'svg', string>;
  const icons: iconType[] = [
    {
      name: 'search',
      viewBox: '0 0 20 20',
      svg: `<path d="M18.869 19.162l-5.943-6.484c1.339-1.401 2.075-3.233 2.075-5.178 0-2.003-0.78-3.887-2.197-5.303s-3.3-2.197-5.303-2.197-3.887 0.78-5.303 2.197-2.197 3.3-2.197 5.303 0.78 3.887 2.197 5.303 3.3 2.197 5.303 2.197c1.726 0 3.362-0.579 4.688-1.645l5.943 6.483c0.099 0.108 0.233 0.162 0.369 0.162 0.121 0 0.242-0.043 0.338-0.131 0.204-0.187 0.217-0.503 0.031-0.706zM1 7.5c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5-2.916 6.5-6.5 6.5-6.5-2.916-6.5-6.5z" />`
    }
  ];
  const displayIcon = icons.find((e) => e.name === name);
</script>

<svg class={$$props.class} height="{size}rem" viewBox={displayIcon.viewBox}>
  {@html displayIcon.svg}
</svg>
