export default (node: HTMLElement, onEventFunction: () => void): { destroy(): void } => {
  const handleClick = (event: PointerEvent) => {
    const path = event.composedPath();
    // TODO: make exclusions dynamic
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
