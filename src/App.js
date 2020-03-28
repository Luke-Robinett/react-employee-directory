import React from 'react';
import './App.css';
import Search from "./components/search";
import Table from "./components/table";

function App() {
  return (
    <div className="App">
      <h1>Employee Directory</h1>
      <hr />
      <Search />
      <Table />
    </div>
  );
}

export default App;
