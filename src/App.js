import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/greet';
import Counter from './components/Counter'
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="App">
       <Greet/>
       <Counter/>
       <ParentComponent/>
    </div>
  );
}

export default App;
