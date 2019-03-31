import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Row,Col,Button,Icon } from 'antd';
import desk from "./desk.svg";
import Announcements from "./Announcements";
import TimeTable from "./TimeTable";


class HomePage extends Component{

  render(){
    return(
      <div>
      <Row style={{width:"92%",minHeight:"300px",backgroundColor:"white",marginBottom:"10px"}}>
        <Col span={12}>
        <h1 style={{textAlign:"left",fontSize:"40px",paddingLeft:"10px"}}>EXAMS TIME </h1>
        <h3 style={{textAlign:"left",fontSize:"18px",paddingLeft:"10px"}}>Here we are,Are you ready to fight? Don't worry, we prepared some tips to be ready for your Exams.</h3>

        <h3 style={{color:"gray",paddingTop:"100px",fontSize:"18px",paddingLeft:"8px"}}><i>"Nothing happens untill something moves" ~ Albert Enistine </i></h3>
        <span style={{paddingLeft:"50px"}}> <Button type="primary" shape="round" size={"large"} style={{width:"250px",height:"50px"}}>View Exams Tips</Button></span>
        </Col>
        <Col span={12} style={{textAlign:"right"}}>
        <img width={"100%"} src={desk}  />
        </Col>
      </Row>

    <Row style={{width:"92%",marginTop:"30px"}}>
      <Col span={18}>
           <Announcements />
      </Col>
      <Col span={6}>
        <TimeTable />
      </Col>
      </Row>
      </div>
    )
  }

}


export default HomePage
