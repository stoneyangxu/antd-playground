import React from 'react';
import { Layout } from 'antd';
import MenuBar from '../MenuBar';

import styles from './MainLayout.css';

const { Header, Footer, Sider, Content } = Layout;

function MainLayout({ children }) {
  return (

    <Layout className={styles.normal}>
      <Sider className={styles.sider}><MenuBar /></Sider>
      <Layout>
        <Header>Header</Header>
        <Content>{children}</Content>
        <Footer>footer</Footer>
      </Layout>
    </Layout>
  );
}

export default MainLayout;
