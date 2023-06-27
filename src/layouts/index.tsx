import { createElement } from "react";
import { ProLayout, DefaultFooter, getMenuData } from "@ant-design/pro-components";

import _ from "lodash-es";
import { Avatar, Menu, Dropdown } from "antd";
import logo from "@/assets/logo.png";
import { UserOutlined, LogoutOutlined, SettingOutlined } from "@ant-design/icons";
import { filterMenus, getPermissionList } from "@/utils/index";
import { asideMenuConfig } from "./menuConfig";
import styles from "./index.module.less";
import { Outlet, NavLink } from "react-router-dom";

const loginOut = async () => {
  localStorage.clear();
};

const menuClick = (item: any) => {
  if (item.key === "logout") {
    loginOut();
  }
};
const loopMenuItem = (menus: any) =>
  menus.map(({ icon, children, ...item }: any) => ({
    ...item,
    icon: icon && createElement(icon),
    children: children && loopMenuItem(children),
  }));
export default function BasicLayout({}) {
  if (_.get(location, "pathname") === "/login") {
    return <div>12345</div>;
  }
  return (
    <ProLayout
      title="工路模板"
      className={styles.container}
      style={{ minHeight: "100vh" }}
      layout="mix"
      logo={logo}
      fixSiderbar
      fixedHeader
      location={{
        pathname: location.pathname,
      }}
      token={{
        header: {
          colorBgHeader: "#001529",
          colorHeaderTitle: "#fff",
          colorTextMenu: "#fff",
          colorTextRightActionsItem: "#fff",
        },
        sider: {
          colorMenuBackground: "#fff",
          colorBgMenuItemSelected: "#e6f7ff",
          colorTextMenuActive: "#1890ff",
          colorTextMenuItemHover: "#1890ff",
          colorTextMenuSelected: "#1890ff",
          colorTextCollapsedButtonHover: "#1890ff",
        },
      }}
      menuDataRender={() => loopMenuItem(filterMenus(asideMenuConfig, getPermissionList([])))}
      menuItemRender={(item: any, defaultDom: any) => {
        if (!item.path) {
          return defaultDom;
        }
        return (
          <NavLink
            to={item.path}
            end
          >
            {item.name}
          </NavLink>
        );
      }}
      rightContentRender={() => (
        <Dropdown
          arrow
          menu={{
            onClick: menuClick,
            items: [
              {
                key: "settings",
                label: "个人设置",
              },
              {
                key: "logout",
                label: "退出登录",
              },
            ],
          }}
          placement="bottom"
          autoAdjustOverflow
          autoFocus
        >
          <div className={styles.avatar}>
            <Avatar
              style={{ cursor: "pointer" }}
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
      footerRender={() => <DefaultFooter copyright="工路信息 版权所持有" />}
    >
      <div className={styles.content}>
        <Outlet />
      </div>
    </ProLayout>
  );
}
