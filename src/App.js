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
      weather: ''
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
        console.log(result.data);
      })
      .catch((e) => {
        alert(e);
      });
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
      </div>
    );
  }
}

export default App;
