import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.backend = process.env.REACT_APP_BACKEND_URL;
    this.state = {
      zip: '',
      temp: ''
    };
  }

  update_zip(event) {
    this.setState({zip: event.target.value});
  }

  lookup(event) {
    event.preventDefault();
    axios
      .get(this.backend + '/?zip=' + this.state.zip)
      .then((result) => {
        this.setState({temp: result.data.temp});
      })
      .catch((e) => {
        alert(e);
      });
  }

  temp(){
    if (this.state.temp) {
      return (
        <p>
          <strong>The temperature is {this.state.temp} degrees</strong>
        </p>
      )
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">DigitalCrafts Weather</h1>
        </header>
        <br/><br/>
        <form className="App-intro" onSubmit={(e) => this.lookup(e)}>
          <label>Zip Code</label>
          <br/>
          <input type="zip" onChange={(e) => this.update_zip(e)} maxLength="5"/>
          <br/><br/>
          <input type="submit"/>
        </form>
        {this.temp()}
      </div>
    );
  }
}

export default App;
