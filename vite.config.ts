import { resolve } from 'path'
import { type ConfigEnv, type UserConfig, defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'

async function getConfig(configEnv: ConfigEnv) {
    const config: UserConfig = {
        optimizeDeps: {
            extensions: ['jsx', 'tsx'],
            esbuildOptions: {
                target: 'esnext',
            },
        },
        resolve: {
            alias: {
                '@interfaces': resolve(__dirname, './lib/interfaces'),
                '@components': resolve(__dirname, './lib/components'),
                '@routes': resolve(__dirname, './lib/routes'),
                '@pages': resolve(__dirname, './lib/pages'),
                '@styles': resolve(__dirname, './lib/styles'),
                '@config': resolve(__dirname, './lib/config'),
                '@lib': resolve(__dirname, './lib'),
                '@assets': resolve(__dirname, './assets'),
                '@hooks': resolve(__dirname, './lib/utils/hooks'),
                '@store': resolve(__dirname, './lib/store'),
                '@context': resolve(__dirname, './lib/context'),
                '@static': resolve(__dirname, './lib/static'),
                '@utils': resolve(__dirname, './lib/utils'),
            },
        },
        plugins: [
            solidPlugin({
                babel: {
                    plugins: ['babel-plugin-macros'],
                },
            }),
        ],
        server: {
            host: true,
            port: 5478,
            strictPort: true,
        },
        build: {
            target: 'esnext',
            lib: {
                // Could also be a dictionary or array of multiple entry points
                entry: resolve(__dirname, 'lib/index.ts'),
                name: 'Wizard-UI',
                // the proper extensions will be added
                fileName: 'wizard-ui',
            },
            rollupOptions: {
                // make sure to externalize deps that shouldn't be bundled
                // into your library
                /* external: [],
                output: {
                    // Provide global variables to use in the UMD build
                    // for externalized deps
                    globals: {
                        solid: 'solid',
                    },
                }, */
            },
        },
    }
    return config
}

export default defineConfig(getConfig)
