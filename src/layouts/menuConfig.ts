import {
    HomeOutlined,
    TableOutlined,
  } from '@ant-design/icons';
  
  const asideMenuConfig = [
    {
      name: '首页',
      path: '/',
      icon: HomeOutlined,
    },
    {
        name: '项目页面',
        path: '/project',
        icon: TableOutlined,
      },
    {
      name: '基本页',
      path: '/basic',
      icon: TableOutlined,
      children: [
        {
          name: '列表',
          path: '/basic/list',
        },
        {
          name: '表单',
          path: '/basic/form',
        },
        {
          name: '详情',
          path: '/basic/detail/1234',
        },
      ],
    },
  ];
  
  export { asideMenuConfig };
  