import { dijkstra } from './dijkstra';
import { ratio, scaleHeight, scaleWidth } from './utils';

function getRowHeight(row, containerWidth, padding) {
  const rowWidth = containerWidth - (row.length - 1) * padding;
  const rowAspectRatio = row.reduce((acc, { ratio }) => acc + ratio, 0);
  return scaleHeight(rowWidth, rowAspectRatio);
}

function cost(images, start, end, containerWidth, targetHeight, padding) {
  const row = images.slice(start, end);
  const rowHeight = getRowHeight(row, containerWidth, padding);
  return Math.pow(Math.abs(rowHeight - targetHeight), 2);
}

function calcSeekLimit(containerWidth, targetRowHeight) {
  if (containerWidth < 420) {
    // limit to two nodes if the container is narrow
    return 2;
  }

  // find how many 3/4 portrait pictures will fit in an ideal row
  const count = ratio(containerWidth, targetRowHeight) / 0.75;
  return Math.round(count * 1.5);
}

type Image = {
  width: number;
  height: number;
  title: string;
  src: string;
  msrc: string;
};

type ScaledImage = Image & {
  index: number;
  ratio: number;
  scaledWidth: number;
  scaledHeight: number;
  isLastInRow: boolean;
  isLastRow: boolean;
};

export default function (
  images: Image[],
  containerWidth: number,
  targetHeight: number,
  padding?: number
): ScaledImage[] {
  // clone the images, and set ratio and initial scaled width / height
  const _images: ScaledImage[] = images.map((image, index) => {
    return {
      ...image,
      index,
      ratio: ratio(image.width, image.height),
      scaledWidth: undefined,
      scaledHeight: undefined,
      isLastInRow: false,
      isLastRow: undefined
    };
  });

  const nodeSeekLimit = calcSeekLimit(containerWidth, targetHeight);

  const graph = (start) => {
    const results = {};
    start = +start;
    results[start] = 0;
    for (let i = start + 1; i < _images.length + 1; ++i) {
      if (i - start > nodeSeekLimit) {
        break;
      }
      results['' + i] = cost(_images, start, i, containerWidth, targetHeight, padding);
    }
    return results;
  };

  const path = dijkstra.find_path(graph, '0', _images.length);

  const scaledImages = [];

  for (let i = 0; i < path.length; i++) {
    if (path[i + 1]) {
      const row = _images.slice(+path[i], +path[i + 1]);
      const isLastRow = i === path.length - 2;

      // scale row
      const rowHeight = getRowHeight(row, containerWidth, padding);
      row.forEach((image, index) => {
        image.scaledWidth = scaleWidth(rowHeight, image.ratio); //.toFixed(1);
        image.scaledHeight = rowHeight;

        if (index === row.length - 1) {
          image.isLastInRow = true;
        }
        image.isLastRow = isLastRow;

        scaledImages.push(image);
      });
    }
  }

  return scaledImages;
}
