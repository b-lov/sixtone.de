interface IntersectOptions {
  once?: boolean;
  root?: HTMLElement;
  rootMargin?: string;
  threshold?: number | number[];
}

let intersectionObserver: IntersectionObserver;

// const ensureIntersectionObserver = (options: IntersectOptions) => {
//   if (intersectionObserver) return;
//   intersectionObserver = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       const eventName = entry.isIntersecting ? 'enterViewport' : 'exitViewport';
//       entry.target.dispatchEvent(new CustomEvent(eventName, { detail: entry }));
//     });
//   }, options);
// };

export default (element: HTMLElement, options: IntersectOptions): { destroy(): void } => {
  intersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const eventName = entry.isIntersecting ? 'enterViewport' : 'exitViewport';
      entry.target.dispatchEvent(new CustomEvent(eventName, { detail: entry }));
    });
  }, options);
  intersectionObserver.observe(element);
  return {
    destroy() {
      intersectionObserver.unobserve(element);
    }
  };
};
