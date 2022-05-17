import query from '$lib/masterQuery';

const endpoint: string = import.meta.env.VITE_PUBLIC_WORDPRESS_API_URL;
const instaEndpoint: string = import.meta.env.VITE_PUBLIC_INSTAGRAM_API_URL;

export async function get(): Promise<Record<string, unknown>> {
  const rawSectionData = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query })
  }).then((res) => res.json());

  const instaData = await fetch(instaEndpoint).then((res) => res.json());

  const sections = rawSectionData.data.sections.nodes.map(
    ({ id, subtitle, name, bgImage, content }) => {
      return { id, subtitle, name, bgImage: bgImage ? bgImage.node.mediaItemUrl : null, content };
    }
  );

  return {
    body: {
      sectionData: {
        homeData: sections.find(({ id }) => id === 'home'),
        bandData: {
          ...sections.find(({ id }) => id === 'band'),
          members: rawSectionData.data.members.nodes.map(({ name, role, featuredImage }) => {
            return { name, role, photo: featuredImage.node.photo };
          })
        },
        soundsData: {
          ...sections.find(({ id }) => id === 'sounds'),
          tracks: rawSectionData.data.sounds.nodes
        },
        galleryData: {
          ...sections.find(({ id }) => id === 'gallery'),
          images: rawSectionData.data.images.nodes.map(({ title, src, mediaDetails }) => {
            return {
              title,
              src,
              msrc: mediaDetails.filteredSizes[0].msrc,
              w: mediaDetails.w,
              h: mediaDetails.h
            };
          })
        },
        newsData: { ...sections.find(({ id }) => id === 'news'), news: instaData.data },
        feedbackData: {
          ...sections.find(({ id }) => id === 'feedback'),
          feedbacks: rawSectionData.data.feedbacks.nodes.map(({ name, text, featuredImage }) => {
            return { name, text, picture: featuredImage.node.picture };
          })
        },
        partnersData: {
          ...sections.find(({ id }) => id === 'partners'),
          partners: rawSectionData.data.partners.nodes.map(({ name, featuredImage, link }) => {
            return { name, picture: featuredImage.node.picture, link };
          })
        },
        contactData: sections.find(({ id }) => id === 'contact')
      }
    }
  };
}
