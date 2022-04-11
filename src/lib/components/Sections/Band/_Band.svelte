<script lang="ts">
  import SectionWrapper from '../SectionWrapper.svelte';
  import MemberCard from './MemberCard.svelte';

  export let members;
  export let componentData;
</script>

<SectionWrapper
  {componentData}
  backgroundClass="bg-[position:45%] bg-[length:200%] sm:bg-cover"
  bgOpacity={0.9}
>
  <div class="relative flex flex-col gap-16">
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
      <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae fugiat laboriosam
      tempore natus reprehenderit consequatur eum, cumque ad voluptatum at, debitis corrupti cupiditate
      aliquam maxime laborum aut accusamus sequi nulla!
    </article>

    <div class="flex flex-wrap justify-evenly">
      {#each members as member, i}
        <MemberCard {member} />
      {/each}
    </div>
  </div>
</SectionWrapper>
