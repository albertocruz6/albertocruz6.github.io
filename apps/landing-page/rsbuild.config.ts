import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

// Docs: https://rsbuild.rs/config/
export default defineConfig({
  plugins: [pluginReact()],
  output: {
    assetPrefix: '/',
  },
  dev: {
    hmr: true,
    liveReload: true,
  },
  html: {
    title: 'Alberto Cruz Salamán',
  },
});
