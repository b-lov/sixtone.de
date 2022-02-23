// really needed???
// if (Number.EPSILON === undefined) {
//   Number.EPSILON = Math.pow(2, -52);
// }

export function round(n: number): number {
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

// OLD debounce
// export function debounce(fn: () => void, delay: number): () => void {
//   let timeoutID = null;
//   return function () {
//     clearTimeout(timeoutID);
//     const args = arguments;
//     const context = this;
//     timeoutID = setTimeout(function () {
//       fn.apply(context, args);
//     }, delay);
//   };
// }
