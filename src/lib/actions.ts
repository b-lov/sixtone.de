export const clickOutside = (
  node: HTMLElement,
  onEventFunction: () => void
): { destroy(): void } => {
  const handleClick = (event: PointerEvent) => {
    const path = event.composedPath();
    if (!path.includes(node) && !path.includes(document.getElementById('Hamburger'))) {
      onEventFunction();
    }
  };
  document.addEventListener('click', handleClick);
  return {
    destroy() {
      document.removeEventListener('click', handleClick);
    }
  };
};