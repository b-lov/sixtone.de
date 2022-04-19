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

  const rawData = await res.json();

  const sections = rawData.data.sections.nodes.map(({ id, subtitle, name, bgImage, content }) => {
    return { id, subtitle, name, bgImage: bgImage ? bgImage.node.mediaItemUrl : null, content };
  });

  return {
    body: {
      sectionData: {
        homeData: sections.find(({ id }) => id === 'home'),
        bandData: {
          ...sections.find(({ id }) => id === 'band'),
          members: rawData.data.members.nodes.map(({ name, role, featuredImage }) => {
            return { name, role, photo: featuredImage.node.photo };
          })
        },
        soundsData: {
          ...sections.find(({ id }) => id === 'sounds'),
          tracks: rawData.data.sounds.nodes
        },
        galleryData: {
          ...sections.find(({ id }) => id === 'gallery'),
          images: rawData.data.images.nodes.map(({ title, src, mediaDetails }) => {
            return {
              title,
              src,
              msrc: mediaDetails.filteredSizes[0].msrc,
              w: mediaDetails.w,
              h: mediaDetails.h
            };
          })
        },
        newsData: sections.find(({ id }) => id === 'news'),
        feedbackData: {
          ...sections.find(({ id }) => id === 'feedback'),
          feedbacks: rawData.data.feedbacks.nodes.map(({ name, text, featuredImage }) => {
            return { name, text, picture: featuredImage.node.picture };
          })
        },
        partnersData: {
          ...sections.find(({ id }) => id === 'partners'),
          partners: rawData.data.partners.nodes.map(({ name, featuredImage, link }) => {
            return { name, picture: featuredImage.node.picture, link };
          })
        },
        contactData: sections.find(({ id }) => id === 'contact')
      }
    }
  };
}
