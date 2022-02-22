import PhotoSwipe from 'photoswipe';
import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default';

export default function (images, index, getElement) {
  const gallery = new PhotoSwipe(document.querySelector('.pswp'), PhotoSwipeUI_Default, images, {
    history: false,
    closeOnScroll: false,
    index: +index,
    mainClass: 'pswp--minimal--dark',
    shareEl: false,
    bgOpacity: 0.9,
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
