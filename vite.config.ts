import { defineConfig, loadEnv, ConfigEnv, UserConfig } from "vite";
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig((mode: ConfigEnv): UserConfig => {
    return {
        plugins: [
            react()
        ],
        server: {
            host: '0.0.0.0',
            open: true,
            port: 8800,
            cors: true,
          },
        resolve: {
            alias: {
                "@": resolve(__dirname, "./src")
            }
        },
        css: {
            preprocessorOptions: {
                less: {
                    javascriptEnabled: true,
					additionalData: `@import "@/styles/var.less";`
                }
            }
        }
    }
})