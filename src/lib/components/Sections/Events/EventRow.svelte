<script lang="ts">
  import SuperDate from './SuperDate.svelte';

  export let event;
  export let firstEvent = false;
  const { date, location, venue, name } = event;
</script>

<div
  class={firstEvent
    ? 'flex font-oswald uppercase text-neutral-500 w-full justify-between items-center border-neutral-700 px-10'
    : 'flex text-neutral-500 w-full justify-between border-t-[0.5px] pt-6 border-neutral-700'}
>
  {#if firstEvent}
    <SuperDate {date} />
  {:else}
    <div>{date}</div>
  {/if}
  <div>{location}</div>
  <div>{venue}</div>
  <div>{name}</div>
</div>
