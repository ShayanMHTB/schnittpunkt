import React from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
      <hr />
      <div className='m-2 p-5 flex items-center justify-center'>
        <h1 className='text-2xl bg-red-400 p-10 rounded-2xl text-gray-200 hover:text-black'>
          Hello World! React + Tailwind
        </h1>
      </div>
    </div>
  );
}

export default App;
