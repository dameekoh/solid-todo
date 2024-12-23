import { defineConfig } from 'vite';
import { macaronVitePlugin } from '@macaron-css/vite';
import solid from 'vite-plugin-solid';

export default defineConfig({
  plugins: [macaronVitePlugin(), solid()],
});
