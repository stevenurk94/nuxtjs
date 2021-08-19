require("dotenv").config();

export default {

  pageTransition: 'pages',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Genesisnow',
    htmlAttrs: {
    },
    meta: [
      { charset: 'UTF-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap' }
    ]
  },



  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [ 
    '~/assets/pageTransition.css',
    '~/assets/css/reset.css',
    '~/assets/css/fonts.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios'
  ],

  // Middleware
  router: {
  },

  // Server Middleware
  serverMiddleware: [
    // '~/middleware/redirects.js'
  ],
  
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/auth'
  ],

  // Axios Configuration: https://axios.nuxtjs.org/setup
  axios: {
    baseURL: "https://genesisnow.herokuapp.com/"
  },

  // Auth Configuration: https://auth.nuxtjs.org/schemes/local.html#options
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: 'auth/local',
            method: 'post',
            propertyName: 'jwt'
          },

          user: {
            url: 'users/me',
            method: 'get',
            propertyName: false
          },

          logout: false

        }
      }
    },

    redirect: {
      login: '/account/login'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
