<script lang="ts">
  export let date;
  const day = date.split(' ')[0].slice(0, -1);
  const month = date.split(' ')[1].slice(0, -1);
</script>

<div class="relative flex items-center justify-center">
  <div class="text-8xl font-bold opacity-20 font-sans tracking-wide">{day}</div>
  <div class="absolute text-white lowercase tracking-widest">{month}</div>
</div>
