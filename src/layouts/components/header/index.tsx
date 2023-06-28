import React from 'react';
import { Layout } from "antd";
import CollapseIcon from './CollapseIcon';
import AvatarIcon from './AvatarIcon';
import styles from './index.module.less'

const Header = () => {
  const { Header } = Layout;
  return (
    <Header className={styles.header}>
      <div className={styles.headerLf}>
				<CollapseIcon />
			</div>
			<div className={styles.headerRi}>
				<span className="username">Hooks</span>
				<AvatarIcon />
			</div>
    </Header>
  );
}

export default Header;
