import { createElement, useState } from "react";
import { ProLayout, DefaultFooter, getMenuData } from "@ant-design/pro-components";

import _ from "lodash-es";
import { Avatar, Menu, Dropdown, Layout } from "antd";
import LayoutMenu from "./components/menu";
import LayoutHeader from "./components/header";
import LayoutTabs from "./components/tabs";
import LayoutFooter from "./components/footer";
import styles from "./index.module.less";
import Logo from "@/assets/logo.png";
import { asideMenuConfig } from "@/layouts/menuConfig";
import { LogoutOutlined } from "@ant-design/icons";
import { Outlet, Link } from "react-router-dom";

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
export const filterMenus = (list: any, authList: any) => {
  return list.filter((item: any) => {
    if (item.children) {
      item.children = filterMenus(item.children, authList);
    }
    if (!_.isEmpty(item.auth)) {
      // 判断是否有交集
      if (!_.isEmpty(_.intersection(authList, item.auth))) {
        return true;
      }
      return false;
    }
    return !item.isHidden ? true : false;
  });
};

export default function BasicLayout({}) {
  const { Sider, Content } = Layout;
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <section className={styles.container}>
      {/* <Sider trigger={null} collapsed={isCollapsed} width={220}>
          <LayoutMenu updateCollapse={(flag: boolean) => {setIsCollapsed(flag)}}/>
        </Sider>
        <Layout>
          <LayoutHeader/>
          <LayoutTabs />
          <Content>
            <Outlet />
          </Content>
          <LayoutFooter />
        </Layout> */}

      <ProLayout
        title="工路模板"
        className={styles.container}
        style={{ minHeight: "100vh" }}
        layout="mix"
        logo={Logo}
        fixSiderbar
        fixedHeader
        location={{
          pathname: location.pathname,
        }}
        token={{
          header: {
            colorBgHeader: "#0a0a00",
            colorHeaderTitle: "#fafafa",
            colorTextMenu: "#fafafa",
            colorTextRightActionsItem: "#fafafa",
            colorBgMenuItemSelected: "#fafafa",
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
        menuDataRender={() => _.cloneDeep(asideMenuConfig)}
        pageTitleRender={() => "工路模板引擎系统"}
        breadcrumbRender={(routes) => routes}
        avatarProps={{
          src: "https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg",
          size: "small",
          title: "工路信息",
          render: (props: any, dom: any) => {
            return (
              <Dropdown
                menu={{
                  onClick: menuClick,
                  items: [
                    {
                      key: "logout",
                      icon: <LogoutOutlined />,
                      label: "退出登录",
                    },
                  ],
                }}
              >
                {dom}
              </Dropdown>
            );
          },
        }}
        menuItemRender={(item, defaultDom: any) => {
          console.log(item, 98);
          if (!item.path || item.isHidden) {
            return defaultDom;
          }
          return <Link to={item.path}>{defaultDom}</Link>;
        }}
        menuFooterRender={false}
        footerRender={() => <DefaultFooter copyright="工路信息 版权所持有" />}
      >
        <LayoutTabs />
        <div className={styles.content}>
          {/* <AuthRouter>{children}</AuthRouter> */}
          <Outlet />
        </div>
      </ProLayout>
    </section>
  );
}
