/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_NAME?: string
  readonly VITE_APP_USER_API?: string
  readonly PACKAGE_VERSION: string
  // add more env variables here...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
