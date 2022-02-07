<script lang="ts">
  import BgStamp from './BgStamp.svelte';
  import Caption from './Caption.svelte';
  import ScrollIndicator from './ScrollIndicator.svelte';
</script>

<!-- <div
  id="Home"
  class="h-screen bg-[url('/images/bg1.jpg')] bg-cover bg-right bg-neutral-800/80
    bg-blend-multiply flex items-center justify-between flex-col p-8"
> -->
<div id="Home" class="h-screen flex items-center justify-between flex-col p-8">
  <BgStamp />
  <div id="dummy" class="h-64" />
  <Caption />
  <ScrollIndicator />
</div>
