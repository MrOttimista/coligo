import React, { Component } from 'react';
import { Row, List, Avatar, Button } from 'antd';
import firebaseApp from "../firebase.js"
import { invalid } from 'moment';

class Roads extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roads: [],
      rods: "",
      e: "none",
      count: 3
    }
    this.delta = this.delta.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }

  delta = (x) => {
    this.setState({
      roads: x
    })
  }

  componentDidMount() {
    let x = [];
    let y = [];
    this.delta = this.delta.bind(this);

    let getSongs=(x)=>{
      let z=""
       firebaseApp.firestore().collection("songs").doc(x).get().then(function (snapshot) {
          
          return snapshot.data().name
        })
        .then(res=>{
          y=[]
          y.push(res)
        })
        
      }

    let fire = firebaseApp.firestore().collection('roads').get().then(function (snapshot) {
      snapshot.docs.forEach((docSnapshot) => {


        if(docSnapshot.data().name != "invalid"){

          let songsList=[]
          console.log(songsList)
          docSnapshot.data().songs.forEach(q=>{
            let z=[]
            firebaseApp.firestore().collection("songs").doc(q).get().then(function (snapshot) {
          
              songsList.push(snapshot.data().name)
            })
           
          })
/*           docSnapshot.data().songs.forEach(x=>songsList.push(getSongs(x)))
 */          x.push({ name: docSnapshot.data().name, songs: songsList})
          
        }
      }) 
      return x
    });
    
  
    
    fire.then(res => this.delta(res))
  }

  handleClick() {
    this.setState({
      count: this.state.count + 3
    })
  }
  render() {
    return (

      <Row style={{ height: "auto", textAlign: "center", backgroundColor: "black",marginTop:"10px"}}>
       <Row ><h1 style={{ fontSize: "40px",color:"blue" }}>Roads</h1></Row>
        <Row style={{ width: "80%", paddingLeft: "30%" }} >
          <List
            itemLayout="horizontal"
            dataSource={this.state.roads.slice(0, this.state.count)}
            renderItem={item => (
              <List.Item style={{color:"blue"}}>
                <List.Item.Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title={<h1 style={{color:"blue",fontSize:"20px"}}>{item.name}</h1>}
                  description={<div >{item.songs.map(x => <h4 style={{color:"white"}}>{x}</h4>)}</div>}
                />
              </List.Item>
            )} />
          <Button type="primary" onClick={this.handleClick}>Load More</Button>
        </Row>

      </Row>

    )
  }
}

export default Roads;