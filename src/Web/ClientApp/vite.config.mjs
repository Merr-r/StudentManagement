// https://github.com/vitejs/vite/discussions/3448
// import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import jsconfigPaths from 'vite-jsconfig-paths';
import fs from 'fs';
import dotenv from 'dotenv';

// Load environment variables from .env.development.local
dotenv.config({ path: '.env.development.local' });

// Print out the environment variables to verify
console.log('SSL_KEY_FILE:', process.env.SSL_KEY_FILE);
console.log('SSL_CRT_FILE:', process.env.SSL_CRT_FILE);
// ----------------------------------------------------------------------

export default defineConfig({
  plugins: [react(), jsconfigPaths()],
  // https://github.com/jpuri/react-draft-wysiwyg/issues/1317
  base: '/',
  define: {
    global: 'window'
  },
  resolve: {
    // alias: [
    //   {
    //     find: /^~(.+)/,
    //     replacement: path.join(process.cwd(), 'node_modules/$1')
    //   },
    //   {
    //     find: /^src(.+)/,
    //     replacement: path.join(process.cwd(), 'src/$1')
    //   }
    // ]
  },
  server: {
    open: false,
    port: 44447,
    https:{
      key: fs.readFileSync(process.env.SSL_KEY_FILE),
      cert: fs.readFileSync(process.env.SSL_CRT_FILE),
    }
  },
  preview: {
    // this ensures that the browser opens upon preview start
    open: true,
    // this sets a default port to 3000
    port: 3000
  }
});
