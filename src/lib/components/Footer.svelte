<script lang="ts">
  const year: number = new Date().getFullYear();
</script>

<div class="flex justify-center p-4 bg-neutral-800 text-neutral-500 text-sm">
  <span class="text-center">
    Copyright © {year} Sixtone •
    <a href="/impressum.txt" target="_blank" class="hover:text-neutral-300 transition">
      Impressum
    </a>
    •
    <a href="/datenschutz.txt" target="_blank" class="hover:text-neutral-300 transition">
      Datenschutz
    </a>
  </span>
</div>

<style lang="postcss">
  div {
    box-shadow: 0px -10px 15px -3px rgb(0 0 0 / 10%), 0px -4px 6px -4px rgb(0 0 0 / 10%);
  }
</style>
