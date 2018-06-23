import React, { Component } from 'react';
import Tile from './components/presentation/Tile';

const image =
  'https://legendsofwindemere.files.wordpress.com/2014/02/the_fortune_teller_by_jerry8448-d378fed.jpg';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.image = image;
  }

  render() {
    return (
      <div className="App">
        <header className="header">
          <h1 className="title">Werewolf</h1>
          <Tile image={image} text="seer" />
        </header>
      </div>
    );
  }
}

export default App;
