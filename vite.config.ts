import {defineConfig} from 'vite'
import resolve from '@rollup/plugin-node-resolve';
import react from '@vitejs/plugin-react'

const path = require('path')

// import path from 'path'
// import pugPlugin from "vite-plugin-pug"

// const options = { pretty: true } // FIXME: pug pretty is deprecated!
// const locals = { name: "My Pug" }

// https://vitejs.dev/config/

export default defineConfig({

    plugins: [react()],
    // alias: [
    //     {
    //         find: '@core',
    //         replacement: './scss/core/core'
    //     }
    // ],
    resolve: {
        alias: {
            scssCore: path.resolve("./scss/core/core"),
            components: path.resolve("./app/components")
            // '@': resolve(__dirname, 'src'),
        }
    },
    build: {
        assetsDir: 'assets',
        assetsInlineLimit: 4096,
    }
})
