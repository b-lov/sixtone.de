interface IntersectOptions {
  once?: boolean;
  root?: HTMLElement;
  rootMargin?: string;
  threshold?: number | number[];
}

let intersectionObserver: IntersectionObserver;

// TODO: if im using multiple observers anyway no need for ensure function
const ensureIntersectionObserver = (options: IntersectOptions) => {
  // if (intersectionObserver) return;
  intersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const eventName = entry.isIntersecting ? 'enterViewport' : 'exitViewport';
      entry.target.dispatchEvent(new CustomEvent(eventName, { detail: entry }));
    });
  }, options);
};

export default (element: HTMLElement, options: IntersectOptions): { destroy(): void } => {
  ensureIntersectionObserver(options);
  intersectionObserver.observe(element);
  return {
    destroy() {
      intersectionObserver.unobserve(element);
    }
  };
};
