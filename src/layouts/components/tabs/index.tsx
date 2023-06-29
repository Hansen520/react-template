import { useEffect, useState } from "react";
import { Tabs } from "antd";
import styles from "./index.module.less";
import { asideMenuConfig } from "@/layouts/menuConfig";
import { searchRoute } from "@/utils";
import { useLocation, useNavigate } from "react-router-dom";

const LayoutTabs = (props: any) => {
  const { pathname } = useLocation();
  const [tabsList, setTabsList] = useState<any>([{ label: "首页", key: "/", closable: false }]);
  const navigate = useNavigate();
  const [activeValue, setActiveValue] = useState<string>(pathname);

  useEffect(() => {
    addTabs();
  }, [pathname]);

  // click tabs
  const clickTabs = (path: string) => {
    navigate(path);
  };

  const addTabs = () => {
    const route = searchRoute(pathname, asideMenuConfig);
    let newTabsList = JSON.parse(JSON.stringify(tabsList)); // 深克隆
    if (tabsList.every((item: any) => item.key !== route.key)) {
      newTabsList.push({ label: route.label, key: route.key });
    }
    setTabsList(newTabsList);
    setActiveValue(pathname);
  };

  const onEdit = (targetKey: React.MouseEvent | React.KeyboardEvent | string, action: "add" | "remove") => {
    if (action === 'remove') {
      if (targetKey === '/') return;
      /* 删除的是当前的标签 */
      if (pathname === targetKey) {
        tabsList.forEach((item: any, index: number) => {
          if (item.key !== pathname) return;
          const nextTab = tabsList[index + 1] || tabsList[index - 1];
          if (!nextTab) return;
          navigate(nextTab.key);
        });
      }
      setTabsList(tabsList.filter((item: any) => item.key !== targetKey));
      setActiveValue(pathname);
    }
  };

  return (
    <div className={styles.tabs}>
      <Tabs
        animated
        destroyInactiveTabPane
        hideAdd
        type="editable-card"
        onEdit={onEdit}
        onChange={clickTabs}
        items={tabsList}
        activeKey={activeValue}
      />
    </div>
  );
};

export default LayoutTabs;
