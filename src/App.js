import React from 'react';
import { BrowserRouter as Router } from "react-router-dom"
import NavBar from "./componets/NavBar"
import Main from "./pages/Main"
import Wrapper from "./componets/Wrapper"

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Wrapper>
          <Main />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
