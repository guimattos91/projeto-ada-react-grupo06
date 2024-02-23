const Config = {
  app: {
    name: import.meta.env.VITE_APP_NAME,
    version: import.meta.env.PACKAGE_VERSION,
  },
  api: {
    user: import.meta.env.VITE_API_USER,
  },
}

export default Config
