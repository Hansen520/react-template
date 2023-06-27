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
          name: '表单',
          path: '/basic/form',
        },
      ],
    },
  ];
  
  export { asideMenuConfig };
  