import React, { Component } from 'react';
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

//TypeScript using ECMAScript class syntax
export class Card extends Component<CardProps> {
  static displayName = 'Card';

  constructor(props: CardProps) {
    super(props);
    console.log(`Card passed to ctor ${props.card.face}`);
  }

  public textCardValue(): string {
    console.log('textCardValue called');
    return this.props.card.toString();
  }

  render() {
    const { card, reveal } = this.props;

    return (
      <div className="single-card">
        <img
          src={reveal ? card.url : card.back}
          alt={this.textCardValue()}
        />
      </div>
    );
  }
}

