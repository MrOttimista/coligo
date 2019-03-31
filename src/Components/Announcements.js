import React, { Component } from 'react';
import { Row,List ,Avatar} from 'antd';
const axios = require('axios');


class Announcements extends Component{
  constructor(props) {
    super(props);
    this.state = {data: [{"name":"Ahmed Mostafa","img":"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png","subject":"Math101","Announcment":"Hello my Heros!!,I just want you to be ready for your exams and foucus on the assignmet"},
  {"name":"Adel Emad","img":"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png","subject":"Math101","Announcment":"Have Fun Guys"},{"name":"Mohamed Ahmed","img":"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png","subject":"Math101","Announcment":"Hello my Heros!!,I just want you to be ready for your exams and foucus on the assignmet,do well in your assignment and have fun!!"}]};  ///Fake Data
  }
    componentDidMount(){
      // axios.get('http://test.coligolms.com/api/announcement')
      //   .then(function (response) {
      //     console.log(response);
      //     this.setState({data:response.data})
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   })


    }
  render(){
    return(
      <Row  style={{backgroundColor:"white",minHeight:"auto"}} >
      <Row>
        <h1 style={{paddingLeft:"10px",fontSize:"25px",textAlign:"left"}}>Announcment</h1>
        <h3 style={{fontSize:"15px",color:"grey",textAlign:"left",paddingLeft:"18px"}}>We educate! Keep updated :) </h3>
      </Row>

      <Row style={{paddingLeft:"30px"}}>
      <List
         itemLayout="horizontal"
         dataSource={this.state.data}
         renderItem={item => (
           <List.Item>
             <List.Item.Meta
                avatar={<img src={item.img} width={"50px"}/>}
                title={<span style={{fontSize:"18px"}}>{item.name}</span>}
                description={item.Announcment}
             />
           </List.Item>
         )}
       />,
      </Row>
      </Row>
    )
  }

}


export default Announcements
