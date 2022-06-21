<script lang="ts">
  import SectionWrapper from '../SectionWrapper.svelte';
  import MemberCard from './MemberCard.svelte';

  export let data;
  export let members;
</script>

<SectionWrapper
  id={data.id}
  name={data.name}
  subtitle={data.subtitle}
  bgImage={data.bgImage}
  backgroundClass="bg-[position:45%] bg-[length:200%] sm:bg-cover"
  bgOpacity={0.9}
>
  <div class="relative flex flex-col gap-16">
    <article
      class="
        max-w-3xl mx-auto prose prose-headings:text-neutral-400
        prose-headings:font-oswald prose-headings:font-light prose-headings:tracking-wide text-neutral-400
      "
    >
      {@html data.content}
    </article>

    <div class="flex flex-wrap justify-evenly">
      {#each members as member, i}
        <MemberCard {member} />
      {/each}
    </div>
  </div>
</SectionWrapper>
