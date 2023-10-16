import React from 'react';
import MiApi from './components/MiApi';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
        <div className="container">
          <a className="navbar-brand" href="/">
            <i className="fas fa-dragon"></i> PokeAPI
          </a>
        </div>
      </nav>
      <div className="container mt-4">
        <MiApi />
      </div>
    </div>
  );
}

export default App;
