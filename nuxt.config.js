export default {
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Website Page Title",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      "@nuxtjs/firebase",
      {
        config: {
          // REQUIRED: Official config for firebase.initializeApp(config):
          apiKey: "<apiKey>",
          authDomain: "<authDomain>",
          projectId: "<projectId>",
          storageBucket: "<storageBucket>",
          messagingSenderId: "<messagingSenderId>",
          appId: "<appId>",
          measurementId: "<measurementId>",
        },
        services: {
          auth: {
            persistence: "local", // default
            initialize: {
              onAuthStateChangedMutation: "ON_AUTH_STATE_CHANGED_MUTATION",
            },
            ssr: true,
          },
          firestore: true,
          storage: true,
        },
      },
    ],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  server: {
    host: "0.0.0.0",
    // https: {
    //   key: fs.readFileSync(path.resolve(__dirname, 'server.key')),
    //   cert: fs.readFileSync(path.resolve(__dirname, 'server.crt'))
    // }
  },
};
