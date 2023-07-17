import { HomeOutlined, TableOutlined, BgColorsOutlined } from "@ant-design/icons";

const asideMenuConfig: any = [
  {
    name: '首页',
    path: '/',
    icon: '1',
    component: '/Home',
    hasChildren: false
  },
  {
    name: "项目页面",
    path: "/project",
    icon: <TableOutlined />,
  },
  {
    name: "hooks应用",
    path: "/hook",
    icon: <TableOutlined />,
  },
  {
    name: "基本页",
    path: "/basic",
    icon: <TableOutlined />,
    children: [
      {
        name: "表单",
        path: "/basic/list",
      },
      {
        name: "列表",
        path: "/basic/form",
      },
      {
        name: "详情",
        path: "/basic/detail/12",
      },
    ],
  },
  {
    name: "slick轮播图分享",
    path: "/slick",
    icon: <BgColorsOutlined />,
  },
  {
    name: "cesium地图分享",
    path: "/cesium",
    icon: <BgColorsOutlined />,
  },
];

export { asideMenuConfig };
