import { get } from 'svelte/store';
import { rawData, currentLocale, instaData } from '$lib/stores/page-content';
import wordpressQuery from '$lib/utils/query';

const WPendpoint = import.meta.env.VITE_PUBLIC_WORDPRESS_API_URL;
const instaEndpoint: string = import.meta.env.VITE_PUBLIC_INSTAGRAM_API_URL;

export async function getPageContent(): Promise<void> {
  fetch(WPendpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query: wordpressQuery(get(currentLocale)) })
  })
    .then((res) => res.json())
    .then((data) => {
      rawData.set(data.data);
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function getInstaMedia(): Promise<void> {
  fetch(instaEndpoint)
    .then((res) => res.json())
    .then((data) => {
      instaData.set(data.data);
    })
    .catch((err) => {
      console.log(err);
    });
}
