/*
 * @Author: Hansen
 * @Date: 2023-06-19 17:25:31
 * @LastEditors: Hansen
 * @LastEditTime: 2023-06-20 10:46:14
 * @FilePath: \template3\src\App.tsx
 * @Description: description
 */
import React from "react";
import { BrowserRouter } from "react-router-dom";

import Router from "@/routers/index";

function App() {
  return (
    <BrowserRouter>
      相关的路由建设
      <Router />
    </BrowserRouter>
  );
}

export default App;
