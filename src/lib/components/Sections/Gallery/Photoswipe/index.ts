import PhotoSwipe from 'photoswipe';
import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default';

interface Image {
  src: string;
  msrc: string;
  w: number;
  h: number;
  title?: string;
}

export default function (
  images: Image[],
  index: number,
  getElement: { (index: number): Element }
): Record<string, unknown> {
  const gallery = new PhotoSwipe(document.querySelector('.pswp'), PhotoSwipeUI_Default, images, {
    history: false,
    closeOnScroll: false,
    index: +index,
    mainClass: 'pswp--minimal--dark',
    shareEl: false,
    bgOpacity: 0.9,
    captionEl: false,
    getThumbBoundsFn: (index) => {
      if (!getElement) {
        return;
      }
      const thumbnail = getElement(index);
      //const thumbnail = thumbData.container.querySelectorAll(thumbData.selector)[index];
      const pageYScroll = window.pageYOffset || document.documentElement.scrollTop;
      const rect = thumbnail.getBoundingClientRect();
      return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
    }
  });
  gallery.init();

  return gallery;
}
