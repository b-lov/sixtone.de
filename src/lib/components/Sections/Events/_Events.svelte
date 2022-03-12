<script lang="ts">
  import events from './events';
  import EventRow from './EventRow.svelte';
</script>

<div class="relative gap-6 px-8 flex-1 flex flex-col items-center justify-center max-w-4xl mx-auto">
  {#each events as event, i}
    <EventRow {event} firstEvent={i === 0} />
  {/each}
</div>
