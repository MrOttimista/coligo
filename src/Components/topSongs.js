import React, { Component } from 'react';
import { Row,List,Avatar,Button} from 'antd';
import firebaseApp from "../firebase.js"

class TopSongs extends Component {
    constructor(props){
        super(props);
        
      
        this.state={
          songs:["we"],
          roads:"",
          e:"none",
          count:4
        }
        this.delta = this.delta.bind(this);
        this.handleClick=this.handleClick.bind(this);
      }

      delta=(x)=>{
        this.setState({
          songs:x
        })
      }
      componentDidMount(){
        let x=[];
        let y=[];
        this.delta = this.delta.bind(this);

        let fire= firebaseApp.firestore().collection('songs').get().then(function(snapshot) {
          snapshot.docs.forEach((docSnapshot) => {
            x.push({name:docSnapshot.data().name,count:docSnapshot.data().count,album:docSnapshot.data().album,artist:docSnapshot.data().artist});
          })
          return x
        });
        fire.then(res=>this.delta(res))

    }
    handleClick(){
      this.setState({
        count:this.state.count+3
      })
    }
    render(){
      return(

            <Row style={{height:"auto",textAlign:"center",backgroundColor:"white"}}>
            
            <Row ><h1 style={{fontSize:"40px"}}>Recent Songs</h1></Row>
            <Row  style={{width:"80%",paddingLeft:"30%"}} >
            <List
              itemLayout="horizontal"
              dataSource={this.state.songs.slice(0,this.state.count)}
              renderItem={item => (
                <List.Item >
                  <List.Item.Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title={<h1 style={{fontSize:"20px"}}>{item.name}</h1>}
                    description={<div><h4>count: {item.count}</h4>
                    <h4>album: {item.album}</h4>
                    <h4>artist: {item.artist}</h4></div>}
                  />
                </List.Item>
            )}/>
                  <Button type="primary" onClick={this.handleClick}>Load More</Button>
            </Row>
              
            </Row>
                
        )
    }
}

export default TopSongs;