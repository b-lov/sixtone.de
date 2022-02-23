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
  let timer: ReturnType<typeof setTimeout>;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
