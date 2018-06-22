import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TextStripper from './components/smart/TextStripper';
import TextInput from './components/dumb/TextInput';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };

    // bind it so we don't lose it
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Hell</h1>
        </header>

        <TextInput handleChange={this.handleTextChange} />
        <TextStripper text={this.state.text} />
      </div>
    );
  }
}

export default App;
