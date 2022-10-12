
import React from 'react';
import MusicHeader from './components/Header';
import MusicSiderMenu from './components/SiderMenu'
import { Layout } from 'antd';
import './assets/base.scss'
import { Outlet } from 'react-router-dom';



const { Content, Sider } = Layout;




const App = () => (
  <Layout>
    <MusicHeader/>
  <Layout>
    
    <Layout
      style={{
        padding: '0 24px 24px',
      }}
    >
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: '16px 0 0 0',
          minHeight: 480,
        }}
      >
        <Outlet/>
      </Content>
    </Layout>
  </Layout>
</Layout>
);

export default App;