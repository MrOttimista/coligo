import React, { Component } from 'react';
import { Row } from 'antd';
// import Carousel from "react-spring-3d-carousel";
import uuidv4 from "uuid";
// import { config } from "react-spring";

let slides = [
    {
      key: uuidv4(),
      content: <img src="https://www.rollingstone.com/wp-content/uploads/2018/06/eminem-track-by-track-revival-new-eafd74b0-8fb9-4907-91a0-d445258b7337.jpg?crop=900:600&width=440" alt="1" />
    },
    {
      key: uuidv4(),
      content: <img src="https://i1.sndcdn.com/avatars-000478542645-7o1c2a-t500x500.jpg" alt="2" />
    },
    {
        key: uuidv4(),
        content: <img src="https://cps-static.rovicorp.com/3/JPG_400/MI0003/892/MI0003892946.jpg?partner=allrovi.com" alt="2" />
      },
      {
        key: uuidv4(),
        content: <img src="https://i.vimeocdn.com/portrait/9461185_300x300" alt="2" />
      }
  ];
  class Songs extends Component {
    state = {
      goToSlide: 0,
      offsetRadius: 2,
      showNavigation: true,
      // config: config.gentle
    };
  
    onChangeInput = (e) => {
      this.setState({
        [e.target.name]: parseInt(e.target.value, 10) || 0
      });
    };
  
    render() {
      return (
          <Row style={{height:"650px"}}>
              <h1 style={{textAlign:"center",fontSize:"20px"}}>Best Songs, Best Singer </h1>
        <Row style={{ width: "80%", height: "500px", margin: "0 auto" }}>
{/* 
          <Carousel
            slides={slides}
            goToSlide={this.state.goToSlide}
            offsetRadius={this.state.offsetRadius}
            showNavigation={this.state.showNavigation}
            animationConfig={this.state.config}
          /> */}
      
        </Row>
        </Row>
      );
    }
  }

export default Songs;