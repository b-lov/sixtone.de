interface IntersectOptions {
  once?: boolean;
  root?: HTMLElement;
  rootMargin?: string;
  threshold?: number | number[];
}

export default (node: HTMLElement, options: IntersectOptions): { destroy(): void } => {
  const settings = { once: false, ...options };
  const observer = new IntersectionObserver((entries) => {
    const entry = entries[0];
    const intersecting = entry.isIntersecting;
    if (intersecting) {
      node.dispatchEvent(
        new CustomEvent('intersect', {
          detail: entry
        })
      );
      if (settings.once) {
        observer.unobserve(node);
      }
    }
  }, settings);
  observer.observe(node);
  return {
    destroy() {
      observer.unobserve(node);
    }
  };
};
