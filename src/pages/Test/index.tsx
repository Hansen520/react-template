/*
 * @Date: 2023-08-14 13:53:03
 * @Description: description
 */
import { useEffect, useRef, useState } from 'react';
import { Tree, Button, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import type { DataNode, TreeProps } from 'antd/es/tree';
import { asideMenuConfig } from '@/layouts/BasicLayout/menuConfig';
import Auth from '@/components/Auth';
import { fileDownloadByRes } from '@/utils';
import styles from './index.module.less';
import store from '@/store';

const Test = () => {
  const [testState, testDispatchers] = store.useModel('test');

  const dom = useRef(null);
  const onSelect: TreeProps['onSelect'] = (selectedKeys, info) => {
    console.log(selectedKeys, info, 9);
  };

  useEffect(() => {
    console.log(123);
  }, [dom.current])

  return (
    <div className={`${styles.container} border border-dashed`} ref={dom}>
      <div className="text-[16px] flex items-center">
        <div className="w-[4px] h-[18px] bg-blue-300 m-[8px]"></div>tailwind测试
      </div>
      <div className="p-[12px]">
        <button className="bg-blue-500 hover:bg-blue-700 text-white py-[2px] px-[10px] py-[4px] rounded-[4px]">
          tailwind按钮
        </button>
      </div>
      <br />
      <div className="text-[16px] flex items-center">
        <div className="w-[4px] h-[18px] bg-blue-300 m-[8px]"></div>测试按钮权限
      </div>
      <div>
        <Space>
          <Auth authKey="authButtonA">
            <Button type="primary">权限按钮A</Button>
          </Auth>
          <Auth authKey="authButtonB">
            <Button type="primary">权限按钮B</Button>
          </Auth>
          <Auth authKey="authButtonC">
            <Button type="primary">权限按钮C</Button>
          </Auth>
        </Space>
      </div>
      <br />
      <div className="text-[16px] flex items-center">
        <div className="w-[4px] h-[18px] bg-blue-300 m-[8px]"></div>审批流文件下载
        <div className="p-[12px]">
          <Button type="primary" onClick={async () => {
            const res = await testDispatchers.DownFlow();
            fileDownloadByRes('文件流下载', res);
          }}>文件下载</Button>
      </div>
      </div>
      <div className="text-[16px] flex items-center">
        <div className="w-[4px] h-[18px] bg-blue-300 m-[8px]"></div>
        配置菜单对照表
      </div>
      <Tree
        className="border border-dashed p2"
        icon={<DownOutlined />}
        fieldNames={{
          title: 'name',
          key: 'id',
        }}
        switcherIcon={<DownOutlined />}
        defaultExpandedKeys={['2']}
        onSelect={onSelect}
        treeData={asideMenuConfig as any}
      />
      <div className={styles.colorAndBg}>123456</div>
    </div>
  );
};

export default Test;
