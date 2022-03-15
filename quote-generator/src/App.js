import React, { Component } from 'react'
import axios from 'axios';
import './App.css';

export class App extends Component {
  state = {
    advice:''
  }

  componentDidMount(){
    console.log('COMPONENT DID MOUNT')
  }

  render() {
    return (
      <div className='app'>
        App
      </div>
    )
  }
}

export default App