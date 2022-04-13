<script lang="ts">
  import * as Sections from '$lib/components/Sections';
  import sectionData from '$lib/components/Sections/sectionData';

  export let data;
  const { members, sounds, images, feedbacks, partners } = data;
</script>

<Sections.Home componentData={sectionData.home} />
<Sections.Band componentData={sectionData.band} {members} />
<Sections.Sounds componentData={sectionData.sounds} {sounds} />
<Sections.Gallery componentData={sectionData.gallery} {images} />
<Sections.News componentData={sectionData.news} />
<Sections.Feedback componentData={sectionData.feedback} {feedbacks} />
<Sections.Partners componentData={sectionData.partners} {partners} />
<Sections.Contact componentData={sectionData.contact} />
