import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Row} from 'antd';
import Particles from 'react-particles-js';
import Songs from "./songs.js";
import TopSongs from './topSongs.js';
import Roads from './roads';



class HomePage extends Component{

  render(){
    return(
      <div>
<<<<<<< HEAD
=======

		  {console.log("Home")}

>>>>>>> fc80e57c0db56736c74dd48b246eb85a7e29f853
      <Row style={{width:"100%",minHeight:"300px",marginBottom:"10px"}} className={"particles"}>
      <div style={{textAlign:"center",position:"absolute",top:"30%",zIndex:"150",width:"100%",pointerEvents:"none"}}>
      <h1 style={{color:"white",textAlign:"center",fontWeight:"bold",fontSize:"60px"}}>Road Trax</h1>
      <h3 style={{color:"white",textAlign:"center",fontSize:"50px",fontFamily: "Lucida Typewriter",paddingTop:"90px"}}>  Add fun to your Roads, Dive into the best music</h3>
      <h3 style={{color:"white",textAlign:"center",fontSize:"30px",fontFamily: "Courier New"}}>  Diffrent Roads but best Music </h3>

      </div>
    <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 260,
	            "density": {
	                "enable": false
	            }
	        },
	        "size": {
	            "value": 3,
	            "random": true,
	            "anim": {
	                "speed": 5,
	                "size_min": 0.5
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "random": true,
	            "speed": 1,
	            "direction": "top",
	            "out_mode": "out"
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "bubble"
	            },
	            "onclick": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        },
	        "modes": {
	            "bubble": {
	                "distance": 250,
	                "duration": 2,
	                "size": 0,
	                "opacity": 0
	            },
	            "repulse": {
	                "distance": 400,
	                "duration": 4
	            }
	        }
	    }
	}} />
                      </Row>


      <Songs />
     <TopSongs />
		<Roads />
      </div>
    )
  }

}


export default HomePage
