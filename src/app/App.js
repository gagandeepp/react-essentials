import React, { Component } from 'react';
import '../app/App.css';
import Login from '../app/features/login/login';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Login/>
      </div>
    );
  }
}

export default App;
