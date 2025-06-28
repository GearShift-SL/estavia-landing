// RSS feed for es blog posts

import rss from '@astrojs/rss';
import { SITE } from '~/config';
import { getCollection } from 'astro:content';
import getSortedPosts from '~/utils/getSortedPosts';

export async function GET(context: any) {
  const unsortedPosts = await getCollection('blog', ({ data }) => {
    return data.draft !== true;
  });

  const postsByLang = unsortedPosts.filter((post) => post.id.split('/')[0] === 'es');

  const posts = getSortedPosts(postsByLang);
  return rss({
    // `<title>` field in output xml
    title: SITE('es').title,
    // `<description>` field in output xml
    description: SITE('es').description,
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#site
    site: SITE('es').siteUrl,
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: posts.map(({ data, id }) => ({
      title: data.title,
      description: data.description,
      pubDate: new Date(data.modDatetime ?? data.pubDatetime),
      link: `/es/blog/${id.split('/')[1]}/`,
    })),
    // (optional) inject custom xml
    customData: `<language>es</language>`,
  });
}
