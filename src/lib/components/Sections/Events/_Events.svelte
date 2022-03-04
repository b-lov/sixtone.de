<script lang="ts">
  import EventRow from './EventRow.svelte';

  const events = [
    {
      date: '14. Dezember, 2022',
      location: 'Mönchengladbach',
      venue: 'Gay Bar',
      name: 'Musikfestival'
    },
    {
      date: '12. Dezember, 2022',
      location: 'Mönchengladbach',
      venue: 'Gay Bar',
      name: 'Musikfestival'
    },
    {
      date: '12. Dezember, 2022',
      location: 'Mönchengladbach',
      venue: 'Gay Bar',
      name: 'Musikfestival'
    },
    {
      date: '12. Dezember, 2022',
      location: 'Mönchengladbach',
      venue: 'Gay Bar',
      name: 'Musikfestival'
    },
    {
      date: '12. Dezember, 2022',
      location: 'Mönchengladbach',
      venue: 'Gay Bar',
      name: 'Musikfestival'
    }
  ];
</script>

<div class="gap-6 px-8 flex-1 flex flex-col items-center justify-center">
  {#each events as event, i}
    <EventRow {event} firstEvent={i === 0} />
  {/each}
</div>
