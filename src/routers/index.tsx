/*
 * @Author: Hansen
 * @Date: 2023-06-20 09:54:05
 * @LastEditors: Hansen
 * @LastEditTime: 2023-06-20 10:45:49
 * @FilePath: \template3\src\routers\index.tsx
 * @Description: 路由表的配置
 */
import { Navigate, useRoutes } from "react-router-dom";
import Layout from "@/layouts";
import Project from '@/pages/project';

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
}



const rootRouter: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/project",
        element: <Project />
      }
    ]
  },
  {
    path: "/abc",
    element: <Project />,
  }
];

const Router = () => {
  const routes = useRoutes(rootRouter as any);
  return routes;
};

export default Router;
