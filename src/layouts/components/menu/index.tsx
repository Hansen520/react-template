import { useState, useEffect } from "react";
import Logo from "@/assets/logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import { Spin, Menu } from "antd";
import styles from "./index.module.less";

const LayoutMenu = (props: any) => {
  const { pathname } = useLocation();
  const { isCollapse, setBreadcrumbList, setAuthRouter, setMenuList: setMenuListAction } = props;
  const [selectedKeys, setSelectedKeys] = useState<string[]>([pathname]);
  const [openKeys, setOpenKeys] = useState<string[]>([]);

  /* 点击当前菜单跳转页面 */
  const navigate = useNavigate();
  const clickMenu = ({ key }: { key: string }) => {
    console.log(key, 14);
    navigate(key);
  }

  // 刷新页面菜单保持高亮
	useEffect(() => {
    console.log(pathname, 22);
		setSelectedKeys([pathname]);
	}, [pathname, isCollapse]);

  return (
    <div className={styles.container}>
      <Spin spinning={false} tip="Loading...">
        <div className={styles.logo}>
          <div className={styles.img}>
            <img src={Logo} />
          </div>
          <div className={styles.title}>工路模板</div>
        </div>
        <Menu
          mode="inline"
          triggerSubMenuAction="click"
          selectedKeys={selectedKeys}
          items={[
            {
              key: "/",
              label: "首页",
            },
            {
              key: "/basic",
              label: "通用菜单",
              children: [
                {
                  key: "/basic/form",
                  label: "表单"
                },
                {
                  key: "/basic/list",
                  label: "列表"
                },
                {
                  key: "/basic/detail/12",
                  label: "详情"
                }
              ]
            },
          ]}
          onClick={clickMenu}
          defaultOpenKeys={["sub1"]}
          inlineCollapsed
          onOpenChange={() => {}}
        ></Menu>
      </Spin>
    </div>
  );
};

export default LayoutMenu;
