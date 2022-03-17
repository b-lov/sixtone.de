<script lang="ts">
  import BgStamp from './BgStamp.svelte';
  import Caption from './Caption.svelte';
  import ScrollIndicator from './ScrollIndicator.svelte';
</script>

<div class="relative h-screen w-full flex items-center justify-between flex-col px-4">
  <BgStamp />
  <div id="dummy" class="h-64" />
  <Caption />
  <ScrollIndicator class="mb-8" />
</div>
