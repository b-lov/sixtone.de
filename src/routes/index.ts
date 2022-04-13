import query from '$lib/masterQuery';

const endpoint: string = import.meta.env.VITE_PUBLIC_WORDPRESS_API_URL;

export async function get(): Promise<Record<string, unknown>> {
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query })
  });

  const data = await res.json();

  return {
    body: {
      data: {
        members: data.data.members.nodes.map(({ name, role, featuredImage }) => {
          return { name, role, photo: featuredImage.node.photo };
        }),
        sounds: data.data.sounds.nodes,
        images: data.data.images.nodes.map(({ title, src, mediaDetails }) => {
          return {
            title,
            src,
            msrc: mediaDetails.filteredSizes[0].msrc,
            w: mediaDetails.w,
            h: mediaDetails.h
          };
        }),
        feedbacks: data.data.feedbacks.nodes.map(({ name, text, featuredImage }) => {
          return { name, text, picture: featuredImage.node.picture };
        }),
        partners: data.data.partners.nodes.map(({ name, featuredImage, link }) => {
          return { name, picture: featuredImage.node.picture, link };
        })
      }
    }
  };
}
