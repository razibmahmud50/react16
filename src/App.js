import React from 'react';
import './App.css';
import Greet from './components/greet';
import Counter from './components/Counter'
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Form/>
       <Greet/>
       <Counter/>
       <ParentComponent/>
       <UserGreeting/>
       <NameList/>
    </div>
  );
}
export default App;
