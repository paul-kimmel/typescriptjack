import React from "react";
import './playerHand.scss';


export const Outcome = {
  Current: "current",
  Win: "win",
  Push: "push",
  Surrender: "surrender",
  Lose: "lose",
} as const;

export type Outcome = (typeof Outcome)[keyof typeof Outcome];



export const PlayState: React.FC<{playState?: Outcome}> = ({playState}) => {
   return (
      <span className="play-state">{playState ?? Outcome.Current}</span>
    )
}