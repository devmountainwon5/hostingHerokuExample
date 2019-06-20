import React, {Component} from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';


class App extends Component {

   componentDidMount = async () =>{
    const ping = await axios.get('/api/ping')
    console.log(ping.data)
  }
  
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Josh's Application
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }

}

export default App;
