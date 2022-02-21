declare namespace JustifiedLayout {
  interface JustifiedLayoutOptions {
    // eslint-disable-next-line @typescript-eslint/ban-types
    images: object[];
    containerWidth: number;
    targetHeight: number;
    padding?: number;
  }
}

declare function JustifiedLayout(options: JustifiedLayout.JustifiedLayoutOptions): ScaledImage[];

export = JustifiedLayout;
