import React, { Component } from 'react';
import './App.css';
import "antd/dist/antd.css";
import { Layout, Menu, Icon,Input } from 'antd';
import HomePage from "./Components/Home";

const {
  Header, Content, Footer, Sider,
} = Layout;
const Search = Input.Search;

class App extends Component {
  render() {
    return (
      <Layout>
     <Sider style={{
       overflow: 'auto', height: '100vh', position: 'fixed', left: 0,
     }}
     >
       <div className="logo" />
       <h1 style={{color:"white",textAlign:"center",paddingTop:"30px",marginBottom:"40px",fontSize:"30px"}}>Coligo</h1>
       <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
         <Menu.Item key="1">
           <Icon type="home"  />
           <span className="nav-text">Dashboard</span>
         </Menu.Item>
         <Menu.Item key="2">
           <Icon type="schedule" />
           <span className="nav-text">Schadule</span>
         </Menu.Item>
         <Menu.Item key="3" >
           <Icon type="book"  />
           <span className="nav-text">Courses</span>
         </Menu.Item>
         <Menu.Item key="4">
           <Icon type="dashboard" />
           <span className="nav-text">GradeBook</span>
         </Menu.Item>
         <Menu.Item key="5">
           <Icon type="stock" />
           <span className="nav-text">Preformance</span>
         </Menu.Item>
         <Menu.Item key="6">
           <Icon type="sound" />
           <span className="nav-text">Announcment</span>
         </Menu.Item>

       </Menu>
     </Sider>
     <Layout style={{ marginLeft: 200 }}>
      <Header style={{ background: '#fff', padding: 0, height:"70px" }} >
      <span style={{fontSize:"30px",paddingLeft:"50px"}}>Welcome Adel,</span>
      <span style={{float:"Right",paddingRight:"50px",textAlign:"center"}}><Search placeholder="input search text" style={{ width: 200 }}/>
      <Icon type="bell" style={{fontSize:"30px",justify:"center",paddingLeft:"20px"}} theme="twoTone"  />
      <Icon type="message" style={{fontSize:"30px",justify:"center",paddingLeft:"20px"}} theme="twoTone"  />
      </span>
       </Header>
       <Content style={{ margin: '24px 16px 0', overflow: 'initial' ,height:"100%"}}>
         <div style={{ padding: 24,height:"100%" }}>
         <HomePage />
         </div>
       </Content>

     </Layout>
   </Layout>
    );
  }
}

export default App;
