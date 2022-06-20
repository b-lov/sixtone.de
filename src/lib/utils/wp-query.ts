export default function (language: string): string {
  return `
    query masterQuery {
      sections: abschnitte(
        first: 100,
        where: {language: ${language}, orderby: {field: MENU_ORDER, order: ASC}}
      ) {
        nodes {
          id: elementId
          subtitle: untertitel
          name: title,
          content,
          bgImage: featuredImage {
            node {
              mediaItemUrl
            }
          }
        }
      }
      members: bandmitglieder(where: {orderby: {field: TITLE, order: ASC}}) {
        nodes {
          name: title
          role
          featuredImage {
            node {
              photo: sourceUrl
            }
          }
        }
      }
      sounds: mediaItems(where: {categoryName: "Sounds", orderby: {field: TITLE, order: DESC}}) {
        nodes {
          title
          src: mediaItemUrl
        }
      }
      images: mediaItems(first: 100, where: {categoryName: "Gallerie"}) {
        nodes {
          title
          src: mediaItemUrl
          mediaDetails {
            w: width
            h: height
            filteredSizes(sizes: "medium_large") {
              msrc: sourceUrl
            }
          }
        }
      }
      feedbacks: rezensionen {
        nodes {
          name: title
          text: content
          featuredImage {
            node {
              picture: mediaItemUrl
            }
          }
        }
      }
      partners {
        nodes {
          name: title
          featuredImage {
            node {
              picture: mediaItemUrl
            }
          }
          link: partnerUrl
        }
      }
    }
  `;
}
