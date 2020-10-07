import React from 'react';
import { BrowserRouter as Router } from "react-router-dom"
import NavBar from "./componets/NavBar"
import SearchForm from './componets/SearchForm';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <SearchForm />
      </div>
    </Router>
  );
}

export default App;
