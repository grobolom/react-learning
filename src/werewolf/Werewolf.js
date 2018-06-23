import React, { Component } from 'react';
import Tile from './components/presentation/Tile';
import Card from './components/presentation/Card';

const image = 'https://i.imgur.com/t9HIFpy.png';
const back = 'https://i.imgur.com/ZhBH7gU.png?1';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayed: 'top',
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    if (this.state.displayed === 'top') {
      this.setState({ displayed: 'bottom' });
      return;
    }

    if (this.state.displayed === 'bottom') {
      this.setState({ displayed: 'top' });
      return;
    }
  }

  render() {
    let visibleSide = <Tile image={image} text="seer" onClick={this.onClick} />;
    if (this.state.displayed === 'top') {
      visibleSide = <Tile image={back} text="back" onClick={this.onClick} />;
    }

    return (
      <div className="App">
        <header className="header">
          <h1 className="title">Werewolf</h1>

          <Card>{visibleSide}</Card>
        </header>
      </div>
    );
  }
}

export default App;
