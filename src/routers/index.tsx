/*
 * @Author: Hansen
 * @Date: 2023-06-20 09:54:05
 * @LastEditors: Hansen
 * @LastEditTime: 2023-06-27 18:04:18
 * @FilePath: \template3\src\routers\index.tsx
 * @Description: 路由表的配置
 */
import { Navigate, useRoutes } from "react-router-dom";
import Layout from "@/layouts";
import Project from '@/pages/project';
import Home from '@/pages/home';
import Form from '@/pages/form'

interface MetaProps {
  keepAlive?: boolean;
  requiresAuth?: boolean;
  title?: string;
  key?: string;
}

interface RouteObject {
  caseSensitive?: boolean;
  children?: RouteObject[];
  element?: React.ReactNode;
  index?: boolean;
  path?: string;
  meta?: MetaProps;
  isLink?: string;
  exact?: boolean;
}



const rootRouter: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/project",
        element: <Project />,
      },
      {
        path: "/basic",
        children: [
          {
            path: 'form',
            element: <Form />
          }
        ]
      }
    ]
  },
  {
    path: "/login",
    element: <Project />,
  },
];

const Router = () => {
  const routes = useRoutes(rootRouter as any);
  return routes;
};

export default Router;
