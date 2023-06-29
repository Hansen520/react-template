/*
 * @Author: Hansen
 * @Date: 2023-06-20 10:03:23
 * @LastEditors: Hansen
 * @LastEditTime: 2023-06-29 11:24:20
 * @FilePath: \template3\src\layouts\index copy.tsx
 * @Description: description
 */
import { createElement, useState } from 'react';
import { ProLayout, DefaultFooter, getMenuData } from '@ant-design/pro-components';
import { Link, Outlet, useLocation } from 'react-router-dom';
import _ from 'lodash';
import { Avatar, Menu, Dropdown } from 'antd';
import logo from '@/assets/logo.png';
import { UserOutlined, LogoutOutlined, SettingOutlined } from '@ant-design/icons';
import { filterMenus, getPermissionList } from '@/utils/index';
import { asideMenuConfig } from './menuConfig';

const loginOut = async () => {
  localStorage.setItem('token', '');
  history!.push('/login');
};

const menuClick = (item) => {
  if (item.key === 'logout') {
    loginOut();
  }
};

const loopMenuItem = (menus) =>
  menus.map(({ icon, children, ...item }) => ({
    ...item,
    icon: icon && createElement(icon),
    children: children && loopMenuItem(children),
  }));
export default function BasicLayout({ children, location }) {
  // const [auth] = useAuth();
  // if (_.get(location, 'pathname') === '/login') {
  //   return <div>{children}</div>;
  // }
  const { pathname } = useLocation();
  const [selectedKeys, setSelectedKeys] = useState<string[]>([pathname]);
  return (
    <ProLayout
      title="工路模板"
      className={styles.container}
      style={{ minHeight: '100vh' }}
      layout="mix"
      logo={logo}
      fixSiderbar
      fixedHeader
      token={{
        header: {
          colorBgHeader: '#001529',
          colorHeaderTitle: '#fff',
          colorTextMenu: '#fff',
          colorTextRightActionsItem: '#fff',
        },
        sider: {
          colorMenuBackground: '#fff',
          colorBgMenuItemSelected: '#e6f7ff',
          colorTextMenuActive: '#1890ff',
          colorTextMenuItemHover: '#1890ff',
          colorTextMenuSelected: '#1890ff',
          colorTextCollapsedButtonHover: '#1890ff',
        },
      }}
      menuDataRender={() => [
        {
          name: '首页',
          path: '/',
        },
        {
          name: '基本页',
          path: '/basic',
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
      ]}
      menuItemRender={(item, defaultDom) => {
        if (!item.path) {
          return defaultDom;
        }
        return <Link to={item.path}>{defaultDom}</Link>;
      }}
      rightContentRender={() => (
        <Dropdown
          arrow
          menu={{
            onClick: menuClick,
            items: [
              {
                key: 'settings',
                icon: <SettingOutlined />,
                label: '个人设置',
              },
              {
                key: 'logout',
                icon: <LogoutOutlined />,
                label: '退出登录',
              },
            ],
          }}
          placement="bottom"
          autoAdjustOverflow
          autoFocus
        >
          <div className={styles.avatar}>
            <Avatar
              style={{ cursor: 'pointer' }}
              shape="square"
              size="small"
              src="https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg"
              icon={<UserOutlined />}
            />
            <span>工路信息</span>
          </div>
        </Dropdown>
      )}
      menuFooterRender={false}
      footerRender={() => <DefaultFooter copyright="工路信息 版权所持有1" />}
    >
      <div className={styles.content}><Outlet /></div>
    </ProLayout>
  );
}