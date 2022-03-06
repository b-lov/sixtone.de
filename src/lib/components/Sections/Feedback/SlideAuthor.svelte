<script lang="ts">
  export let picture;
  export let name;
</script>

<div class="flex flex-col items-center gap-6">
  <img src={picture} alt="" class="w-24 h-24 object-cover rounded-full" />
  <div class="text-white font-oswald text-xl font-light">{name}</div>
</div>
