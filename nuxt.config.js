// env별 config 파일 설정
const defaultConfig = require('./src/config/default.json')
let env = 'development'
switch (process.env.NODE_ENV) {
  case 'production':
    env = 'production.test'
    break
  case 'test':
    env = 'production.test'
    break
}

let config = null
try {
  const envConfig = require(''.concat('./src/config/', env.trim(), '.json'))
  config = Object.assign({}, defaultConfig, envConfig)

  console.log(config)
} catch (e) {
  config = defaultConfig
}

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'rss-client',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'},
    ],
    link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}],
  },

  server: {
    port: 3001,
    host: '0.0.0.0', // default: localhost
  },

  env: {
    config: config,
    DEV_ENV: process.env.DEV_ENV,
  },

  dev: process.env.NODE_ENV !== 'production',

  // root src
  srcDir: 'src/',

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/style.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    // '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axiosaxios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: `${config.appSettings.apiUrlForSSR}`,
    browserBaseURL: `${config.appSettings.apiUrl}`,
    init(axios) {
      axios.defaults.withCredentials = true
    },
    debug: false,
  },

  router: {
    // base: '/',
    middleware: ['authCheck'],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    terser: {
      terserOptions: {
        compress: {
          drop_console:
            process.env.NODE_ENV === 'development' ||
            process.env.NODE_ENV === 'test' ||
            process.env.DEV_ENV === 'test'
              ? false
              : true,
        },
      },
    },
  },

  // 3rd party configuration
  dayjs: {
    locales: ['ko'],
    defaultLocale: 'ko',
    defaultTimeZone: 'Asia/Seoul',

    plugins: [
      'utc', // import 'dayjs/plugin/utc'
      'timezone', // import 'dayjs/plugin/timezone'
      'isBetween',
      'isSameOrBefore',
      'isSameOrAfter',
      'duration',
    ],
  },
}
