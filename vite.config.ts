import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
// https://vite.dev/config/

export default defineConfig({

  
  plugins: [ tailwindcss(),],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

})

// import { defineConfig, loadEnv } from 'vite';
// import tailwindcss from '@tailwindcss/vite';
// import path from 'path'

// export default defineConfig(({ mode }) => {

//   const env = loadEnv(mode, process.cwd(), '');

//   return {
//     plugins: [tailwindcss()],
//     resolve:{      
//       alias: {
//         "@": path.resolve(__dirname, "./src"),
//       },
//       define: {
//         __APP_ENV__: JSON.stringify(env.VITE_API_URL),
//       },
//     }
//   };
// });