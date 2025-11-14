import React from 'react';
import { PlayerHand } from './playerHand';
import { PlayerName } from './playerName';
import './playerHands.scss';
import type { CardData } from './card';


export const PlayerHands: React.FC<{ hands: CardData[][] }> = ({ hands }) => {
  return (
    <div className="player-hands">
      <PlayerName playerName={"PaulKi"} />
      {hands.map((hand, index) => (
        <PlayerHand key={index} hand={hand} reveal={true} />
      ))}
    </div>
  );
}


