/*
 * @Author: Hansen
 * @Date: 2023-06-20 09:54:05
 * @LastEditors: Hansen
 * @LastEditTime: 2023-07-06 14:03:00
 * @FilePath: \template3\src\routers\index.tsx
 * @Description: 路由表的配置
 */
import { useRoutes, Navigate } from "react-router-dom";
import Layout from "@/layouts";
import Project from '@/pages/project';
import Home from '@/pages/home';
import Form from '@/pages/form'
import List from '@/pages/list';
import Detail from '@/pages/detail';
import Login from '@/pages/login';
import Cesium from '@/pages/cesium'
import MyHook from '@/pages/myHook';
import Slick from '@/pages/Slick';

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
        path: "project",
        element: <Project />,
      },
      {
        path: "hook",
        element: <MyHook />,
      },
      {
        path: "slick",
        element: <Slick />,
      },
      {
        path: "cesium",
        element: <Cesium />,
      },
      {
        path: "basic",
        children: [
          {
            path: 'form',
            element: <Form />
          },
          {
            path: 'list',
            element: <List />
          },
          {
            path: 'detail/:id',
            element: <Detail />
          }
        ]
      }
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <Navigate to="/404" />
  }
];

const Router = () => {
  const routes = useRoutes(rootRouter as any);
  return routes;
};

export default Router;
