import React from 'react';
import './App.css';
import Greet from './components/greet';
import Counter from './components/Counter'
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';

function App() {
  return (
    <div className="App">
      <LifecycleA/>
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
