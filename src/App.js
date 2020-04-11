import React from 'react';
import logo from './logo.svg';
import './App.css';
import API from './utils/API';

function App() {
  const getDog = () => { API.getRandomUser().then((data) => {
    console.log(data.data.results)
  })};
  getDog()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
