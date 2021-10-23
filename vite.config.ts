import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      name: 'nkxrb-tools',
      fileName: 'nkxrb-tools',
      entry: 'src/index.ts'
    },
    outDir: 'lib'
  },
  plugins: [
    dts()
  ]
})