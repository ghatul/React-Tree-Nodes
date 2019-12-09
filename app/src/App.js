import React from 'react';
import logo from './logo.svg';
import './App.css';


const nodes = [
  {
    id:1,
    name: 'Akshya',
  },
  {
    id: 2,
    name: 'Hrithik',
  },
  {
    id: 3,
    name: 'sharaukh',
    pid:1,
  },
  {
    id: 4,
    name: 'Ajay',
    pid: 1
  },
  {
    id: 5,
    name: 'Salman',
    pid: 4,
  }, 
  {
    id: 6,
    name: 'Amir'
  },
  {
    id: 7,
    name: 'Amitabh',
    pid: 6
  },
  {
    id: 8,
    name: 'Jon snow',
    pid: 7
  },
  {
    id: 9,
    name: 'Bob',
    pid: 8,
  },
  {
    id: 10,
    name: 'Mumbai',
    pid: 9,
  },
  {
    id: 11,
    name: 'Delhi',
    pid: 10,
  },
  {
    id: 12,
    name: 'Dubai',
  },
  {
    id: 13,
    name: 'Kohlapur',
    Pid: 8
  },
  {
    id: 14,
    name: 'Tuljapur',
    pid: 7
  },
  {
    id: 15,
    name: 'London',
  },
  {
    id: 16,
    name: 'China',
    pid: 6
  },
  {
    id: 17,
    name: 'Newyork',
    pid: 1
  }
]

function App() {
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
