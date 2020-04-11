import React from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import SearchResultContainer from './components/SearchResultContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <SearchResultContainer />
    </div>
  );
}

export default App;
