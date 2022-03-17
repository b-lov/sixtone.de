<script lang="ts">
  import MemberCard from './MemberCard.svelte';
  import members from './members';
</script>

<div class="flex flex-col px-4 gap-16 relative max-w-5xl mx-auto">
  <article
    class="
      max-w-3xl mx-auto whitespace-normal prose text-neutral-400 first-letter:text-8xl
      first-letter:float-left first-letter:mr-3 first-letter:font-sans first-line:uppercase
      first-line:tracking-widest first-letter:font-bold
    "
  >
    Sixtone lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores maiores ipsum
    consequatur eius repellendus aut amet eveniet ad? Modi dolores officia impedit ab error fugit
    dolore, laudantium consequuntur ipsam placeat. Lorem ipsum, dolor sit amet consectetur
    adipisicing elit. Nostrum, autem omnis optio dolorem saepe similique id et recusandae nemo,
    laudantium illum doloremque. Rem iure porro adipisci, sed nemo deserunt facere?
    <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae fugiat laboriosam tempore
    natus reprehenderit consequatur eum, cumque ad voluptatum at, debitis corrupti cupiditate aliquam
    maxime laborum aut accusamus sequi nulla!
  </article>

  <div class="flex flex-wrap justify-evenly">
    {#each members as member, i}
      <MemberCard {member} />
    {/each}
  </div>
</div>
