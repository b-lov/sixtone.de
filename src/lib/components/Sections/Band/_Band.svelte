<script lang="ts">
  import SectionWrapper from '../SectionWrapper.svelte';
  import MemberCard from './MemberCard.svelte';

  export let bandData;

  const { id, name, bgImage, subtitle, members, content } = bandData;
</script>

<SectionWrapper
  {id}
  {name}
  {subtitle}
  {bgImage}
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
      {@html content}
    </article>

    <div class="flex flex-wrap justify-evenly">
      {#each members as member, i}
        <MemberCard {member} />
      {/each}
    </div>
  </div>
</SectionWrapper>
