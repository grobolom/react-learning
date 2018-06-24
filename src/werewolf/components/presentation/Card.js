import React, { Component } from 'react';
import Tile from './Tile';
import settings from '../../settings';

export default class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: 'face',
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState('visible', this.state.visible === 'face' ? 'back' : 'face');
  }

  getCardFace() {
    return (
      <Tile
        image={this.props.image}
        text={this.props.text}
        onClick={this.onClick}
      />
    );
  }

  getCardBack() {
    return (
      <Tile image={settings.defaultCardBack} text="" onClick={this.onClick} />
    );
  }

  render() {
    const visibleCard =
      this.state.visible === 'face' ? this.getCardFace() : this.getCardBack();

    return <div className="card">{visibleCard}</div>;
  }
}
