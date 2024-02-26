import React from 'react';
import styled from 'styled-components';

const AppStyled = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

function App() {
  return (
    <AppStyled>
      <div id="tooltip-root" />
    </AppStyled>
  );
}

export default App;
