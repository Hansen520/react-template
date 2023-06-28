import React from "react";
import { Tabs } from "antd";
import styles from './index.module.less';

const LayoutTabs = () => {
  const { TabPane } = Tabs;
  return (
    <div className={styles.tabs}>
      <Tabs
        animated
        hideAdd
        type="editable-card"
      >
        {[{ title: '首页' }].map((item: any) => {
          return (
            <TabPane
              key={item.path}
              tab={
                <span>
                  {item.title}
                </span>
              }
            ></TabPane>
          );
        })}
      </Tabs>
    </div>
  );
};

export default LayoutTabs;
