<script lang="ts">
  import SuperDate from './SuperDate.svelte';

  export let event;
  export let firstEvent = false;
  const { date, location, venue, name } = event;
</script>

<div
  class="
    flex w-full text-neutral-300 justify-between border-neutral-500 items-center
    {firstEvent ? 'font-oswald uppercase px-10' : 'border-t-[0.5px] pt-6 px-4'}
  "
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
