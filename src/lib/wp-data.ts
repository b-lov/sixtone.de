const endpoint: string = import.meta.env.VITE_PUBLIC_WORDPRESS_API_URL;
const query = `
  query getMembers {
    bandmitglieder {
      nodes {
        title
        role
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;

export default async function (): Promise<Record<string, unknown>> {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query })
  });

  if (response.ok) {
    const responseObj = await response.json();
    const data = responseObj.data.bandmitglieder.nodes;
    return {
      props: {
        data
      }
    };
  }

  return {
    status: response.status,
    error: new Error(`Could not load band: ${response.statusText}`)
  };
}
