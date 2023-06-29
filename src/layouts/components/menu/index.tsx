import { useState, useEffect } from "react";
import Logo from "@/assets/logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import { Spin, Menu, Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { asideMenuConfig } from "@/layouts/menuConfig";
import styles from "./index.module.less";

const LayoutMenu = ({ updateCollapse }: any) => {
  const { pathname } = useLocation();
  const [selectedKeys, setSelectedKeys] = useState<string[]>([pathname]);
  const [isCollapse, setIsCollapse] = useState(true);

  /* 点击当前菜单跳转页面 */
  const navigate = useNavigate();
  const clickMenu = ({ key }: { key: string }) => {
    console.log(key, 14);
    navigate(key);
  };

  // 刷新页面菜单保持高亮
  useEffect(() => {
    setSelectedKeys([pathname]);
  }, [pathname, isCollapse]);

  return (
    <div className={styles.container}>
      <Spin spinning={false} tip="Loading...">
        <div className={styles.logo}>
          <div className={styles.img}>
            <img src={Logo} />
          </div>
          {isCollapse ? <div className={styles.title}>工路模板</div> : ""}
        </div>
        <Menu
          mode="inline"
          triggerSubMenuAction="click"
          selectedKeys={selectedKeys}
          items={asideMenuConfig}
          onClick={clickMenu}
          defaultOpenKeys={["sub1"]}
          inlineCollapsed
          onOpenChange={() => {}}
        />
        <div
          className={styles.collapsed}
          onClick={() => {
            setIsCollapse(!isCollapse);
            updateCollapse(isCollapse);
          }}
        >
          {isCollapse ? (
            <Button shape="circle" icon={<RightOutlined style={{ color: "#666" }} />} size={"small"} />
          ) : (
            <Button shape="circle" icon={<LeftOutlined style={{ color: "#666" }} />} size={"small"} />
          )}
        </div>
      </Spin>
    </div>
  );
};

export default LayoutMenu;
