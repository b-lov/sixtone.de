<script lang="ts">
  import Button from '$lib/components/Button.svelte';
</script>

<form
  class="
    flex-1 flex flex-col justify-center px-12 gap-8 bg-[url('images/contactbg.jpg')]
    bg-cover bg-neutral-900/80 bg-blend-multiply bg-fixed items-start 
  "
>
  <div class="flex gap-3 w-full">
    <input type="text" name="Name" id="Name" placeholder="Name" />
    <input type="email" name="Email" id="Email" placeholder="E-Mail" />
    <input type="tel" name="Tel" id="Tel" placeholder="Tel" />
  </div>
  <textarea name="Message" id="Message" cols="30" rows="8" placeholder="Nachricht" class="w-full" />
  <Button text="senden" />
</form>

<style lang="postcss">
  input {
    @apply flex-1;
  }
  input,
  textarea {
    @apply bg-black bg-opacity-0 border-0 border-b-2 border-neutral-500
    placeholder:text-neutral-500 text-neutral-300 focus:ring-0 focus:border-accent;
  }
</style>
