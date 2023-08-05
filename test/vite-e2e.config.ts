import swc from 'unplugin-swc'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    include: ['**/*.e2e-spec.?(c|m)[jt]s?(x)']
  },
  plugins: [
    swc.vite()
  ]
})
