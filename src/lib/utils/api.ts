import { get } from 'svelte/store';
import { rawData, currentLocale } from '$lib/stores/page-content';
import wordpressQuery from '$lib/utils/query';

const endpoint = import.meta.env.VITE_PUBLIC_WORDPRESS_API_URL;

export async function getPageContent(): Promise<void> {
  fetch(endpoint, {
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
