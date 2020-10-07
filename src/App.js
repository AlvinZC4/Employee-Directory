import React from 'react';
import { BrowserRouter as Router } from "react-router-dom"
import NavBar from "./componets/NavBar"

function App() {
  return (
    <Router>
      <div>
        <NavBar />
      </div>
    </Router>
  );
}

export default App;
