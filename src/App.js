import React from 'react';
import  './styles/init.scss';
import './styles/app.scss'
import Demo from './demo'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Demo></Demo>
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
