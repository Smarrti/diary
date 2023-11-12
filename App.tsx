import React from 'react';
import styled from 'styled-components/native';
import {Navigation} from './src/navigation';
import {defaultColors} from './src/styles/colors';

const Container = styled.View`
  flex: 1;
  background-color: ${defaultColors.background[0]};
`;

function App(): JSX.Element {
  return (
    <Container>
      <Navigation />
    </Container>
  );
}

export default App;
