<script lang="ts">
  import { currentLocale } from '$lib/stores/page-content';

  export let newsItem;

  const {
    caption,
    id,
    media_type,
    media_url,
    permalink,
    thumbnail_url,
    timestamp,
    username,
    children
  } = newsItem;

  $: date = new Date(timestamp).toLocaleDateString($currentLocale, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const image_url = (() => {
    switch (media_type) {
      case 'VIDEO':
        return thumbnail_url;
      case 'CAROUSEL_ALBUM':
        return children.data[0].media_url;
      default:
        return media_url;
    }
  })();
</script>

<a href={permalink} target="_blank" class="group">
  <div class="max-w-xs h-80 w-80 relative overflow-hidden">
    <img src={image_url} alt="" srcset="" />
    <div
      class="
        absolute top-0 left-0 w-full h-full bg-neutral-900 flex flex-col items-center justify-between
        text-neutral-300 text-center p-4 py-8 gap-4 bg-opacity-70 group-hover:bg-opacity-90 transition
      "
    >
      <h1 class="text-2xl font-oswald font-light tracking-wide group-hover:text-accent transition">
        {caption}
      </h1>
      <p class="text-sm italic font-light group-hover:text-accent transition">{date}</p>
    </div>
  </div>
</a>
