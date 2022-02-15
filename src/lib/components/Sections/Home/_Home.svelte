<script lang="ts">
  import BgStamp from './BgStamp.svelte';
  import Caption from './Caption.svelte';
  import ScrollIndicator from './ScrollIndicator.svelte';
  import DynamicBackground from '../DynamicBackground.svelte';
</script>

<div class="relative h-screen flex items-center justify-between flex-col p-8">
  <DynamicBackground imagePath="bg1" opacity={0.7} />
  <BgStamp />
  <div id="dummy" class="h-64" />
  <Caption />
  <ScrollIndicator />
</div>
