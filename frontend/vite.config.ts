import { defineConfig, loadEnv  } from 'vite'
import react from '@vitejs/plugin-react-swc'
// https://vitejs.dev/config/
// export default defineConfig({
//   const env = loadEnv(mode, process.cwd(), '');
//   plugins: [react()],
// })

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.USERNAME_DB': JSON.stringify(env.USERNAME_DB),
      'process.env.PASSWORD_DB': JSON.stringify(env.PASSWORD_DB)
    },
    plugins: [react()],
  }
})