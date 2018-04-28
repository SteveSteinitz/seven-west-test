import React, { Component } from 'react';
import styled from 'styled-components';
import tile from './tile.jpg';
import './App.css';
import Banner from './Banner';

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

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Content>
          <Banner title={'Home and Away'}>
          </Banner>
        </Content>
      </AppWrapper>
    );
  }
}

export default App;
