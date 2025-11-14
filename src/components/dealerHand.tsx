import React from "react";
import { Hand } from "./hand";
import {type CardData } from "./card";
import "./dealerHand.scss";

type DealerHandProps = {
  hand: CardData[];
  reveal: boolean;
};

export const DealerHand: React.FC<DealerHandProps> = ({hand, reveal})=>{

  const playerName = "Dealer";
  return (
    <div className="dealer-hand">
      <div>
        <span className="player-name">{playerName}</span>
        <Hand hand={hand} reveal={reveal} />
      </div>
    </div>
  );
}

DealerHand.displayName = "DealerHand";
