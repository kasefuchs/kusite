/// <reference types="@rsbuild/core/types" />

interface ImportMetaEnv {
  readonly KUSITE_API_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
