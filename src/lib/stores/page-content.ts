import { writable, derived, type Readable } from 'svelte/store';

export const currentLocale = writable('DE');
// export const currentLanguage = writable((browser && localStorage.getItem('currentLocale')) || 'RU');

export const rawData = writable({
  sections: { nodes: [] },
  members: { nodes: [] },
  sounds: { nodes: [] },
  images: { nodes: [] },
  feedbacks: { nodes: [] },
  partners: { nodes: [] }
});

export const sectionsDataArr = derived(rawData, ($rawData) => {
  const data = $rawData.sections.nodes;
  if (data.length) {
    return data;
  }
});

export const sectionsData: Readable<Record<string, unknown>> = derived(rawData, ($rawData) => {
  const data = $rawData.sections.nodes;
  if (data.length) {
    return data
      .map(({ id, subtitle, name, bgImage, content }) => {
        return { id, subtitle, name, bgImage: bgImage ? bgImage.node.mediaItemUrl : null, content };
      })
      .reduce((obj, item) => ({ ...obj, [item['id']]: item }), {});
  }
});

export const membersData = derived(rawData, ($rawData) => {
  const data = $rawData.members.nodes;
  if (data.length) {
    return data.map(({ name, role, featuredImage }) => {
      return { name, role, photo: featuredImage.node.photo };
    });
    // return data;
  }
});
