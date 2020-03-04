import React from 'react';
import logo from './logo.svg';
import Accordian from './state-drills/Accordian';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Accordian sections={[{ title: 'Section 1', content: 'Content 1' }, { title: 'Section 2', content: 'Content 2' }, { title: 'Section 3', content: 'Content 3' }]} />
      </header>
    </div>
  );
}

export default App;
