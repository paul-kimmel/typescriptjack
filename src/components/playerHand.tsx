import React from 'react';
import { Hand } from './hand';
import { type CardData } from './card';
import { PlayState, Outcome } from './playState';
import './playerHand.scss';


export const PlayerHand: React.FC<{ hand: CardData[], reveal : boolean, playState? : Outcome  }> = 
  ({ hand, reveal, playState }) => {
  return (
    <div className="player-hand">
      <div>
        <div>
          <Hand hand={hand} reveal={reveal} />
        </div>
        <div>
          <PlayState playState={playState ?? Outcome.Current} />
        </div>
      </div>
    </div>
  );
}

