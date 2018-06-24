import React, { Component } from 'react';

import cards from './cards';
import { makeCard } from './cards';

const Werewolf = makeCard(cards.werewolf);
const Seer = makeCard(cards.seer);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayed: 'top',
    };
  }

  render() {
    return (
      <div className="App">
        <header className="header">
          <h1 className="title">Werewolf</h1>
        </header>
        <section className="section">
          {Werewolf}
          {Seer}
        </section>
      </div>
    );
  }
}

export default App;
