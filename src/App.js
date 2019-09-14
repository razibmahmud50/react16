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
import PortalDemo from './components/PortalDemo';
import ErrorBoundary from './components/ErrorBoundary';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Hero heroName="batman"/>
        <Hero heroName="superman"/>
        {/* <Hero heroName="joker"/> */}
      </ErrorBoundary>
      <PortalDemo/>
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
