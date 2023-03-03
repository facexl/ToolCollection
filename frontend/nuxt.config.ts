// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        // The private keys which are only available server-side
        apiSecret: '123',
        // Keys within public are also exposed client-side
        public: {
          apiBase: '/api'
        }
    },
    modules: [
        // '@nuxt/ui'
    ],
    nitro:{

    },
    postcss:{

    },
    vite:{

    },
    webpack:{

    },
    app: {
        head: {
          charset: 'utf-8',
          viewport: 'width=500, initial-scale=1',
          title: 'My App',
          meta: [
            // <meta name="description" content="My amazing site">
            { name: 'description', content: 'My amazing site.' }
          ],
        }
    }
})
