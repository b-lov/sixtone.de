<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import SectionWrapper from '../SectionWrapper.svelte';

  export let componentData;
</script>

<SectionWrapper
  {componentData}
  containerClass="max-w-4xl"
  backgroundClass="bg-[position:38%] bg-[length:230%] sm:bg-cover"
>
  <form
    on:submit|preventDefault
    class="relative flex-1 flex flex-col justify-center gap-8 items-start"
  >
    <div class="flex flex-col md:flex-row gap-3 w-full">
      <input type="text" name="Name" id="Name" placeholder="Name" />
      <input type="email" name="Email" id="Email" placeholder="E-Mail" />
      <input type="tel" name="Tel" id="Tel" placeholder="Tel" />
    </div>
    <textarea
      name="Message"
      id="Message"
      cols="30"
      rows="8"
      placeholder="Nachricht"
      class="w-full"
    />
    <!-- TODO: checkbox, hiermit bestätige ich... -->
    <Button text="senden" />
  </form>
</SectionWrapper>

<style lang="postcss">
  input {
    @apply flex-1;
  }
  input,
  textarea {
    @apply bg-black bg-opacity-0 border-0 border-b-2 border-neutral-500 transition duration-300
    placeholder:text-neutral-500 text-neutral-300 focus:ring-0 focus:border-accent;
  }
</style>
