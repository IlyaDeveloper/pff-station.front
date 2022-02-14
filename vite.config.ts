import {defineConfig} from 'vite'
import resolve from '@rollup/plugin-node-resolve';
import react from '@vitejs/plugin-react'

const path = require('path')
// import pugPlugin from "vite-plugin-pug"

// const options = { pretty: true } // FIXME: pug pretty is deprecated!
// const locals = { name: "My Pug" }

// https://vitejs.dev/config/

export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            // entries: [
            //     {find: '@fonts', replacement: '../../assets/fonts'}
            // ]
        },
    },
    plugins: [react()]
})
