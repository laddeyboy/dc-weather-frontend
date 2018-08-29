import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { setTempAsync } from './actions.js';

import { Provider } from 'react-redux';
import store from './store.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {zip: ''};
  }

  update_zip(event) {
    this.setState({zip: event.target.value});
  }

  lookup(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.zip);
  }

  temp(){
    if (this.props.temp) {
      return (
        <p>
          <strong>The temperature is {this.props.temp} degrees</strong>
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

function mapStateToProps (state) {
  return {
    temp: state.temp
  }
}

function mapDispatchToProps (dispatch) {
  return {
    onSubmit: function (data) {
      dispatch(setTempAsync(data))
    }
  }
}

var ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

function AppWrapper () {
  return (
    <Provider store={store}>
      <ConnectedApp/>
    </Provider>
  )
}

export default AppWrapper;
