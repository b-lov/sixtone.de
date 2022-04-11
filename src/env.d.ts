/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PUBLIC_WORDPRESS_API_URL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
