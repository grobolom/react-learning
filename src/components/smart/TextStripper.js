import React, { Component } from 'react';
import TextOutput from '../dumb/TextOutput';
import { dedupeString } from '../../utils';

export default class TextStripper extends Component {
  stripText(text) {
    return dedupeString(text);
  }
  render() {
    return <TextOutput text={this.stripText(this.props.text)} />;
  }
}
