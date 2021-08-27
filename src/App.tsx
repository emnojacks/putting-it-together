import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Header } from './common';
import { Checking } from './checking';

//React.Component <Props, State>
class App extends React.Component{
  render() {
  return (
    <div className="App">
      <Header
      brand="Komodo Banking"/>
      test
      <Checking />
    </div>
  );
  }
}

export default App;
