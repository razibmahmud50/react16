import React from 'react';
import './App.css';
import Greet from './components/greet';
import Counter from './components/Counter'
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import Fragment from './components/Fragment';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';

function App() {
  return (
    <div className="App">
      <RefsDemo/>
      <ParentComp/>
      <Fragment/>
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
