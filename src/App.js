import React from 'react';
import { BrowserRouter as Router } from "react-router-dom"
import NavBar from "./componets/NavBar"
import SearchForm from './componets/SearchForm'
import Wrapper from "./componets/Wrapper"
import Table from "./componets/Table"

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Wrapper>
          <SearchForm />
          <Table />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
