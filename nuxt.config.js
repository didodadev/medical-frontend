import tr from './languages/tr'
import en from './languages/en'
import de from './languages/de'

const URL = 'http://localhost:4000/api'
// const URL = 'https://backend.medionpremium.com/api'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'medical-frontend',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.2/font/bootstrap-icons.css' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css' },
      { rel: 'icon', type: 'image/x-icon', href: '/logo.png' }
    ]
  },

  // loading: './components/loading.vue', 

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'ant-design-vue/dist/antd.css',
    '~assets/css/global.css'
  ],

  loading: '~/components/loading.vue',

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/antd-ui',
    '@/plugins/bootstrap',
    '@/plugins/vue2-editor',
    '@/plugins/axios',
  ],

  loadingIndicator: {
    name: 'rotating-plane',
    color: 'blue',
    background: 'red'
  },

  publicRuntimeConfig: {
    axios: {
      browserBaseURL: URL
    }
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/i18n'
  ],
  i18n: {
    fallbackWarn: false,
    missingWarn: false,
    locales: [
      {
        code: 'en',
        iso: 'en-US'
      },
      {
        code: 'tr',
        iso: 'tr-TR'
      },
      {
        code: 'de',
        iso: 'de'
      }
    ],
    vueI18n: {
      messages: { tr, en, de }
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    browserBaseURL: URL,
    proxyHeaders: false,
    credentials: false
  },

  generate: {
    fallback: true
  }
}
