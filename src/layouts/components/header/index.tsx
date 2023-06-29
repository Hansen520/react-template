import { useState } from 'react';
import { Layout } from "antd";
import AvatarIcon from './AvatarIcon';
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import styles from './index.module.less'

const Header = () => {
  const { Header } = Layout;
  return (
    <Header className={styles.header}>
      <div className={styles.headerLf} />
			<div className={styles.headerRi}>
				<span className={styles.username}>工路</span>
				<AvatarIcon />
			</div>
    </Header>
  );
}

export default Header;
