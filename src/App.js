import React, { Component } from 'react';
import './App.css';
import "antd/dist/antd.css";
import { Layout } from 'antd';
import HomePage from "./Components/Home";

import { makeStyles } from '@material-ui/core/styles';


const {Content} = Layout;

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  body:{
    minWidth:100,
    border: "4px solid black",
    borderRadius : "50%",
    color:"red"
  },
  menuBody:{
    fontSize:"56px",
    color:"blue",   
    backgroundColor:"yellow"
  },
  selected:{
    color:"red"
  },
}));

function App() {


    return (
      <Layout>
        <Layout style={{ marginLeft: 0 }}>
          <Content
            style={{ width: "100%", overflow: "initial", height: "100%" }}
          >
            <div style={{ padding: 0, height: "100%" }}>
              <HomePage />
            </div>
          </Content>
        </Layout>

      </Layout>
    );
  }


export default App;
