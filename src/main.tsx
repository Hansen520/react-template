/*
 * @Author: Hansen
 * @Date: 2023-06-19 17:22:20
 * @LastEditors: Hansen
 * @LastEditTime: 2023-06-21 10:26:01
 * @FilePath: \template3\src\main.tsx
 * @Description: description
 */
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { createRoot } from 'react-dom/client'; 
const root = createRoot(document.getElementById("root") as any);
root.render(<App />);
