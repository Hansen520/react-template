import { createElement, useState } from "react";
import { ProLayout, DefaultFooter, getMenuData } from "@ant-design/pro-components";

import _ from "lodash-es";
import { Avatar, Menu, Dropdown, Layout } from "antd";
import LayoutMenu from "./components/menu";
import LayoutHeader from './components/header';
import LayoutTabs from './components/tabs';
import LayoutFooter from './components/footer';
import styles from "./index.module.less";
import { Outlet } from "react-router-dom";

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
  const { Sider, Content } = Layout;
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <section className={styles.container}>
        <Sider trigger={null} collapsed={isCollapsed} width={220}>
          <LayoutMenu updateCollapse={(flag: boolean) => {setIsCollapsed(flag)}}/>
        </Sider>
        <Layout>
          <LayoutHeader/>
          <LayoutTabs />
          <Content>
            <Outlet />
          </Content>
          <LayoutFooter />
        </Layout>
    </section>
  );
}
