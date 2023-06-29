import React from "react";
import { Tabs } from "antd";
import styles from "./index.module.less";

const LayoutTabs = () => {
  const { TabPane } = Tabs;
  return (
    <div className={styles.tabs}>
      <Tabs animated hideAdd type="editable-card" items={[{ label: "首页", key: "/" }]} />
    </div>
  );
};

export default LayoutTabs;
