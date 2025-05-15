import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react', // Emotion 자동 JSX 변환
      babel: {
        plugins: [
          [
            '@emotion/babel-plugin',
            {
              sourceMap: true,
              autoLabel: 'dev-only',
              labelFormat: '[filename]--[local]',
              cssPropOptimization: true,
            },
          ],
        ],
      },
    }),
  ],
});