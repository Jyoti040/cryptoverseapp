import React from 'react';
import { Menu, Avatar, Typography, Button,Space } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, FundOutlined,  BulbOutlined, MenuOutlined } from '@ant-design/icons';
import { useState,useEffect } from 'react';
import icon from '../images/cryptoLogo.jpg';

const Navbar = () => {
  const [activeMenu,setActiveMenu]=useState(true);
  const [screenSize,setScreenSize]=useState(undefined);
  const [colour,setColour] = useState('white');

  useEffect(
    ()=>{
     const handleSize=()=>setScreenSize(window.innerWidth);
     window.addEventListener('resize',handleSize);
     handleSize();
     return()=> window.removeEventListener('resize',handleSize);
    },[]
  )

  useEffect(
    ()=>
    {
      if (screenSize<=800){
        setActiveMenu(false);
        setColour("white")
      }
      else{
        setActiveMenu(true);
        setColour("white")
      }
    },[screenSize]
  )

  return (
    <div className="navbar-container">
      <div className="logo-container">
      
    <div><Avatar src={icon} size="larger" style={{ height:'50px', width:'45px' , marginRight:'5px'}}/></div>
   <Space>
          <Typography.Title level={2} className="logo" style={{color : colour , marginTop:'10px'}}>
            CryptoVerse
          </Typography.Title>
          <Button className='navbar-control' onClick={()=> setActiveMenu(!activeMenu)} style={{paddingTop:'1px'}}e><MenuOutlined/> </Button>
      </Space>
        
</div>
   { activeMenu  &&
        <Menu theme="dark"   mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<FundOutlined />}>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<BulbOutlined />}>
            <Link to="/news">News</Link>
          </Menu.Item>
        </Menu>
}
    </div>
  );
};

export default Navbar;