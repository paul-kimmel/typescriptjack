import React from "react";
import { type CardData, Card } from "./card";
import "./hand.scss";

export interface HandProps {
  hand: CardData[];
  reveal: boolean;
}

export const count = (hand: CardData[]) => hand.length;
export const getTextHand = (hand: CardData[]) =>
  hand.map((item) => item.toString()).join("");

export const Hand: React.FC<HandProps> = ({ hand, reveal }) => {
  return (
    <div className="hand" role="group" aria-label="hand">
      {hand.map((card, index) => {
        console.log(index);
        return <Card key={index} card={card} reveal={index > 0 || reveal} />;
      })}
    </div>
  );
};
