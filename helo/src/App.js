import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Post from './components/Post/Post';
import route from './route';

class App extends Component {
  render() {
    return (
      <div className="App">
        {route}
        
        
      </div>
    );
  }
}

export default App;
