import React from "react";
import "./App.css";
import Header from "./components/Header"
import SearchResultContainer from "./components/SearchResultContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchResultContainer />
    </div>
  );
}

export default App;
