<script lang="ts">
  import BgStamp from './BgStamp.svelte';
  import Caption from './Caption.svelte';
  import ScrollIndicator from './ScrollIndicator.svelte';
  import { useViewport } from '$lib/actions';
  import { bigHeader } from '$lib/stores';
</script>

<div
  use:useViewport={{ rootMargin: '-85% 0% -15% 0%' }}
  on:enterViewport={() => bigHeader.set(true)}
  on:exitViewport={() => bigHeader.set(false)}
  class="h-full flex items-center justify-between flex-col p-8"
>
  <BgStamp />
  <div id="dummy" class="h-64" />
  <Caption />
  <ScrollIndicator />
</div>
