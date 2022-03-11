export function round(n: number): number {
  if (Number.EPSILON === undefined) {
    // @ts-expect-error: polyfill for cases when EPSILON doesn't exist (IE)
    Number.EPSILON = Math.pow(2, -52);
  }
  return Math.round(n * 100 + Number.EPSILON) / 100;
}

export function ratio(width: number, height: number): number {
  return round(width / height);
}

export function scaleHeight(width: number, ratio: number): number {
  return round(width / ratio);
}

export function scaleWidth(height: number, ratio: number): number {
  return round(height * ratio);
}

export function debounce(func: () => void, timeout: number): () => void {
  let timer: number;
  return (...args) => {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

export const mouseXPositionInElement = (event: MouseEvent, element: HTMLElement): number => {
  const position = (event.clientX - element.getBoundingClientRect().left) / element.clientWidth;
  if (position < 0) return 0;
  if (position > 1) return 1;
  return position;
};

export const secondsToMMSS = (time: number): string => {
  return new Date(1000 * time).toISOString().substring(14, 19);
};
