/*
 * @Author: Hansen
 * @Date: 2023-06-27 16:58:35
 * @LastEditors: Hansen
 * @LastEditTime: 2023-06-29 17:14:24
 * @FilePath: \template3\src\layouts\menuConfig.tsx
 * @Description: description
 */
import { HomeOutlined, TableOutlined } from "@ant-design/icons";

const asideMenuConfig: any = [
  {
    label: "首页",
    key: "/",
    icon: <HomeOutlined />,
  },
  {
    label: "项目页面",
    key: "/project",
    icon: <TableOutlined />,
  },
  {
    label: "hooks应用",
    key: "/hook",
    icon: <TableOutlined />,
  },
  {
    label: "基本页",
    key: "/basic",
    icon: <TableOutlined />,
    children: [
      {
        label: "表单",
        key: "/basic/list",
      },
      {
        label: "列表",
        key: "/basic/form",
      },
      {
        label: "详情",
        key: "/basic/detail/12",
      },
    ],
  },
];

export { asideMenuConfig };
