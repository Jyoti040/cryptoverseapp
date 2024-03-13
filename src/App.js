import React from 'react';
import { Routes, Route  } from 'react-router-dom';
import { Layout } from 'antd';
import { Navbar, News, HomePage, Cryptocurrencies, CryptoDetails } from './components/index';
import './App.css';


const { Sider, Content } = Layout;

const App = () => {
  return (
    <div className="app">
      <Layout>
        <Sider 
            
            width={300} style={{ height:"100vh", position: 'fixed',left:'300'}}>
          
          <Navbar />
        </Sider>
    
        <Layout style={{ paddingLeft: '300px' }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              
            }}
          >
            
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </Content>
         
        </Layout>
        
      </Layout>
    
        {/* <Typography.Title level={1} styles={{color:"white",textAlign:"center"}}>
            Cryptoverse
            <br/>
            All Rights Reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
            
          </Space>*/}
      </div>
      
    
  );
};

export default App;