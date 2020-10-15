import React from 'react';
import NavBar from "./componets/NavBar"
import Main from "./pages/Main"
import Wrapper from "./componets/Wrapper"

function App() {
  return (
      <div>
        <NavBar />
        <Wrapper>
          <Main />
        </Wrapper>
      </div>
  );
}

export default App;
