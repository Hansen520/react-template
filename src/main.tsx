/*
 * @Author: Hansen
 * @Date: 2023-06-19 17:22:20
 * @LastEditors: Hansen
 * @LastEditTime: 2023-06-29 14:23:49
 * @FilePath: \template3\src\main.tsx
 * @Description: description
 */
import '@/styles/global.less';
import "@/styles/reset.less";
import App from "./App";

import { createRoot } from 'react-dom/client'; 
const root = createRoot(document.getElementById("root") as any);
root.render(<App />);
