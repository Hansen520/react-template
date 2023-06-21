/*
 * @Author: Hansen
 * @Date: 2023-06-19 17:27:24
 * @LastEditors: Hansen
 * @LastEditTime: 2023-06-19 17:57:13
 * @FilePath: \template3\vite.config.ts
 * @Description: description
 */
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
            port: 7778,
          },
        resolve: {
            alias: {
                "@": resolve(__dirname, "./src")
            }
        }
    }
})