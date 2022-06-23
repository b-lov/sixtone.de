<!-- in case of much spam try these:
https://www.nfriedly.com/techblog/2009/11/how-to-build-a-spam-free-contact-forms-without-captchas/
https://mags.ai/blog/add-recaptcha-to-a-svelte-app/
https://rodneylab.com/sveltekit-hcaptcha-contact-form/
https://www.youtube.com/watch?v=mBXEnakkUIM
https://css-tricks.com/headless-form-submission-with-the-wordpress-rest-api/ -->
<script lang="ts">
  import { fly } from 'svelte/transition';
  import { browser } from '$app/env';
  import { writable } from 'svelte/store';
  import Button from '$lib/components/Button.svelte';
  import SectionWrapper from '../SectionWrapper.svelte';

  export let data;

  // const { id, name, subtitle, bgImage } = contactData;

  let successNotification = false;
  let failureNotification = false;
  const notificationTimeout = 5000;

  const messageData = writable(
    (browser && JSON.parse(localStorage.getItem('messageData'))) || {
      name: '',
      mail: '',
      tel: '',
      text: ''
    }
  );

  messageData.subscribe((data) => {
    if (browser) localStorage.setItem('messageData', JSON.stringify(data));
  });

  const sendToTelegram = async () => {
    const chat_id = import.meta.env.VITE_PUBLIC_TELEGRAM_CHAT_ID;
    const botId = import.meta.env.VITE_PUBLIC_TELEGRAM_BOT_ID;
    const parse_mode = 'markdown';
    const telegramUrl = `https://api.telegram.org/${botId}/sendMessage`;
    const text = `*Neue Nachricht!*\n\n_Name:_ ${$messageData.name}\n_Email:_ ${$messageData.mail}\n_Tel:_ ${$messageData.tel}\n_Nachricht:_ ${$messageData.text}`;
    await fetch(telegramUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id, text, parse_mode })
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
      })
      .then(() => {
        successNotification = true;
        setTimeout(() => {
          successNotification = false;
        }, notificationTimeout);
        $messageData.name = $messageData.mail = $messageData.tel = $messageData.text = '';
      })
      .catch((error) => {
        failureNotification = true;
        setTimeout(() => {
          failureNotification = false;
        }, notificationTimeout);
        console.log(error);
      });
  };
</script>

<SectionWrapper
  id={data.id}
  name={data.name}
  subtitle={data.subtitle}
  bgImage={data.bgImage}
  containerClass="max-w-4xl"
  backgroundClass="bg-[position:38%] bg-[length:230%] sm:bg-cover"
>
  <form
    on:submit|preventDefault={sendToTelegram}
    class="relative flex-1 flex flex-col justify-center gap-8 items-start"
  >
    <div class="flex flex-col md:flex-row gap-3 w-full">
      <input
        type="text"
        name="Name"
        id="Name"
        placeholder="Name"
        required
        pattern={String.raw`[A-zÀ-ž\u0400-\u04ff\s.-]{2,}`}
        maxlength="25"
        title="Die Eingabe muss mindestens 2 Zeichen enthalten. Nur Buchstaben sowie '-' und  '.' erlaubt."
        bind:value={$messageData.name}
      />
      <input
        type="email"
        name="Email"
        id="Email"
        placeholder="E-Mail"
        required
        bind:value={$messageData.mail}
        on:keydown={(e) => e.code === 'Space' && e.preventDefault()}
      />
      <input
        type="tel"
        name="Tel"
        id="Tel"
        placeholder="Tel (optional)"
        pattern={String.raw`[0-9+\s]{4,}`}
        maxlength="25"
        title="Die Eingabe muss mindestens 4 Zeichen enthalten. Nur Zahlen und '+' erlaubt."
        bind:value={$messageData.tel}
      />
    </div>
    <textarea
      bind:value={$messageData.text}
      name="Message"
      id="Message"
      cols="30"
      rows="8"
      placeholder="Nachricht"
      maxlength="700"
      class="w-full"
      required
    />
    <div>
      <input
        type="checkbox"
        id="datenschutz"
        name="datenschutz"
        class="p-2 mr-1 text-accent focus:ring-0 focus:ring-offset-0"
        required
      />
      <label for="datenschutz" class="text-sm">
        Ich stimme der Verarbeitung meiner Daten zum Zweck der Kontaktaufnahme durch Sixtone zu und
        akzeptiere den Datenschutz.
      </label>
    </div>
    <Button
      text="senden"
      on:mousedown={() => {
        Object.keys($messageData).forEach(
          (k) => ($messageData[k] = $messageData[k].trim().replace(/\s+/g, ' '))
        );
      }}
    />
  </form>
</SectionWrapper>
{#if successNotification || failureNotification}
  <div class="fixed bottom-0 right-0 m-4" transition:fly>
    <div class="{successNotification ? 'bg-green-900' : 'bg-red-900'} text-neutral-300 p-4 pb-3">
      <p class="text-sm">
        {#if successNotification}
          <span class="font-bold">Nachricht gesendet!</span> <br />
          <span class="text-xs"> Wir werden uns schnellstmöglich bei Dir melden.</span>
        {:else}
          <span class="font-bold">Nachricht konnte nicht gesendet werden!</span> <br />
          <span class="text-xs">
            Es ist ein Fehler aufgetreten. Bitte kontaktiere uns unter
            <a class="underline" href="mailto:info@sixtone.de">info@sixtone.de</a>
          </span>
        {/if}
      </p>
    </div>
    <div class="h-1.5 w-full {successNotification ? 'bg-green-900' : 'bg-red-900'}">
      <div
        id="notification-bar"
        style="animation-duration: 5s;"
        class={successNotification ? 'bg-green-600' : 'bg-red-600'}
      />
    </div>
  </div>
{/if}

<style lang="postcss">
  input {
    @apply flex-1;
  }
  input:not([type='checkbox']),
  textarea {
    @apply bg-black bg-opacity-0 border-0 border-b-2 border-neutral-500 transition duration-300
    placeholder:text-neutral-500 text-neutral-300 focus:ring-0 focus:border-accent;
  }
  #notification-bar {
    animation: notification linear forwards;
    @apply w-full h-full;
  }
  @keyframes notification {
    form {
      width: 100%;
    }
    to {
      width: 0%;
    }
  }
</style>
