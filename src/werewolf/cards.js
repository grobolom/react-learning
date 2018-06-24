import React from 'react';
import Card from './components/presentation/Card';
import Tile from './components/presentation/Tile';

import settings from './settings';

/**
 * activeRole means you do/don't wake up at night
 */
export default {
  villager: {
    image: '',
    name: 'Villager',
    activeRole: false,
  },
  seer: {
    image: 'https://i.imgur.com/t9HIFpy.png',
    name: 'Aura Seer',
    activeRole: true,
  },
  werewolf: {
    image: 'https://i.imgur.com/3fUBaE4.png?1',
    name: 'Werewolf',
    activeRole: true,
  },
  hunter: {
    image: '',
    name: 'Hunter',
    activeRole: false,
  },
};

export function makeCard(type) {
  return <Card image={type.image} text={type.name} />;
}
