import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import styles from './index.module.less';

const CollapseIcon = (props: any) => {
  const { isCollapse, updateCollapse } = props;
  return (
    <div className={styles.collapsed}>
      <MenuUnfoldOutlined />
    </div>
  );
}

export default CollapseIcon;
 