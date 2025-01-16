/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly BASE_PATH: string;
    readonly SITE_URL: string;
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}


declare namespace NodeJS {
    /** for astro.config.mjs */
    interface ProcessEnv {
      readonly NODE_ENV: 'development' | 'production' | 'test';
      readonly SITE_URL: string;
      /** Optional in .env file but always defined in type. Default: false. */
      readonly PREVIEW_MODE: boolean;
    }
  }
  