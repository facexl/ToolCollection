import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import * as AntD from 'ant-design-vue'
import { addComponent } from '@nuxt/kit'

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
        // for ant-design-vue types https://github.com/nuxt/nuxt/discussions/19016
        async function (options, nuxt) {
            for (const key in AntD) {
              if (['version', 'install'].includes(key)) continue
              await addComponent({
                filePath: 'ant-design-vue',
                name: `A${key}`,
                export: key
              })
            }
        },
    ],
    nitro:{

    },
    postcss:{

    },
    vite:{
        plugins: [
            /* ... */
            Components({
              resolvers: [
                AntDesignVueResolver(),
              ],
            }),
        ],
        // ssr: {
        //     noExternal: ['moment', 'compute-scroll-into-view', 'ant-design-vue']
        // }
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
