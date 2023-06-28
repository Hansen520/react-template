import { useState } from "react";
import Logo from "@/assets/logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import { Spin, Menu } from "antd";
import styles from "./index.module.less";

const LayoutMenu = (props: any) => {
  const { pathname } = useLocation();
  const { isCollapse, setBreadcrumbList, setAuthRouter, setMenuList: setMenuListAction } = props;
  const [selectedKeys, setSelectedKeys] = useState<string[]>([pathname]);
  const [openKeys, setOpenKeys] = useState<string[]>([]);

  
  return (
    <div className={styles.container}>
      <Spin spinning={false} tip="Loading...">
		<div className={styles.img}>
        	<img src={Logo} />
		</div>
        <Menu
          mode="inline"
          triggerSubMenuAction="click"
          selectedKeys={selectedKeys}
          items={[{
			key: '1',
			label: 'home',
		  },{
			key: '2',
			label: 'wangWei',
		  }]}
          onClick={() => {}}
		  defaultOpenKeys={['sub1']}
		  inlineCollapsed
          onOpenChange={() => {}}
        ></Menu>
      </Spin>
    </div>
  );
};

export default LayoutMenu;
