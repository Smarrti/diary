import React from 'react';
import styled from 'styled-components/native';
import {Navigation} from './src/navigation';

const Container = styled.View`
  flex: 1;
`;

function App(): JSX.Element {
  return (
    <Container>
      <Navigation />
    </Container>
  );
}

export default App;
