import React, { Component } from 'react';
import styled from 'styled-components';
import tile from './tile.jpg';
import Banner from './Banner';

// Need to know these dimensions since I want the image to be actual size but
// know of no reasonable way to scale a div to an image size
const tileHeight = '354px';
const tileWidth = '630px';

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
  position: relative;
  height: ${tileHeight};
  width: ${tileWidth};
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Content>
          <Banner title={'Home and Away'} />
        </Content>
      </AppWrapper>
    );
  }
}

export default App;
