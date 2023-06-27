/*
 * @Author: Hansen
 * @Date: 2023-06-19 17:25:31
 * @LastEditors: Hansen
 * @LastEditTime: 2023-06-27 17:19:40
 * @FilePath: \template3\src\App.tsx
 * @Description: description
 */
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
