import { HomeOutlined, TableOutlined } from "@ant-design/icons";

const asideMenuConfig: any = [
  {
    label: "首页",
    key: "/",
    // icon: HomeOutlined,
  },
  {
    label: "项目页面",
    key: "/project",
    // icon: TableOutlined,
  },
  {
    label: "基本页",
    key: "/basic",
    // icon: TableOutlined,
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
