import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.png';
import tile from './tile.jpg';
import './App.css';

const AppWrapper = styled.div`
  background-color: black;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100vh;
  align-items: center;
  justify-items: center; /* adjusted */
  text-align: center;
`;

const Content = styled.div`
  background-image: url(${tile});
  background-repeat: no-repeat;
  width: 620px;
  height: 340px;
  position: relative;

`;

const Footer = styled.div`
  display: grid;
  grid-template-columns: 2fr;
  grid-template-rows: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index:1000;
  font-size:11px;
  position: absolute;
  width:100%;
  height: 28%;
  left:0px;
  bottom: 0px;
  padding:6px 0px;
  color: white;
}  
`
const Logo = styled.div`
  height: 10%;
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Content>
          <Footer>
            <Logo>
              <img src={logo} className="App-logo" alt="logo" />
            </Logo>
            <h1>Home and Away</h1>
          </Footer>
        </Content>
      </AppWrapper>
    );
  }
}

export default App;
