import styled from 'styled-components';
import React from 'react';
import logo from './logo.png';

const Content = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;	
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  width:100%;
  height:25%;
  left:0px;
  bottom: 0px;
  padding:6px 8px;
  color: white;
  text-align: left;
}`

const imgStyle = {
  maxHeight: "100%",
  maxWidth: "100%"
}

function Banner (props) {
    return (
      <Content>
        <img style={imgStyle} src={logo} className="App-logo" alt="logo"/>
        <h1>{props.title}</h1>
     </Content>
    );
}

export default Banner;

