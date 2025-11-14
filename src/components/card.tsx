import React  from 'react';
import './card.scss';

export interface CardData {
  
  index: number;
  face: string;
  lowValue: number;
  highValue: number;
  textSuit: string;
  suit: string;
  url: string;
  back: string;
  toString(): string;
}

export interface CardProps {
  card: CardData;
  reveal: boolean;
}

export const textCardValue = (card: CardData): string => {
  return card.toString();
}

//TypeScript using ECMAScript class syntax
export const Card : React.FC<CardProps> = ({ card, reveal }) => {
  
  return (
  <div className="single-card">
      <img
        src={reveal ? card.url : card.back}
        alt={textCardValue(card)}
      />
    </div>
    );
  }


