import query from '$lib/masterQuery';

const endpoint: string = import.meta.env.VITE_PUBLIC_WORDPRESS_API_URL;

export async function get(): Promise<Record<string, unknown>> {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query })
  });

  if (response.ok) {
    const responseObj = await response.json();

    const members = responseObj.data.members.nodes.map(({ name, role, featuredImage }) => {
      return { name, role, photo: featuredImage.node.photo };
    });
    const sounds = responseObj.data.sounds.nodes;
    const images = responseObj.data.images.nodes.map(({ title, src, mediaDetails }) => {
      return {
        title,
        src,
        msrc: mediaDetails.filteredSizes[0].msrc,
        w: mediaDetails.w,
        h: mediaDetails.h
      };
    });
    const feedbacks = responseObj.data.feedbacks.nodes.map(({ name, text, featuredImage }) => {
      return { name, text, picture: featuredImage.node.picture };
    });
    const partners = responseObj.data.partners.nodes.map(({ name, featuredImage, link }) => {
      return { name, picture: featuredImage.node.picture, link };
    });

    return {
      body: {
        members,
        sounds,
        images,
        feedbacks,
        partners
      }
    };
  }

  return {
    status: response.status,
    error: new Error(`Could not load band: ${response.statusText}`)
  };
}
