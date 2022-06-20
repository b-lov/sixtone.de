import wordpressQuery from '$lib/utils/wp-query';
const endpoint = import.meta.env.VITE_PUBLIC_WORDPRESS_API_URL;

export async function get(): Promise<Record<string, unknown>> {
  const data = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query: wordpressQuery('EN') })
  }).then((res) => res.json());

  const { sections, members, sounds, images, feedbacks, partners } = data.data;

  return {
    body: {
      sections,
      members,
      sounds,
      images,
      feedbacks,
      partners
    }
  };
}
