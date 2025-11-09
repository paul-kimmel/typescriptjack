import React, { Component } from 'react';
import './card.scss';

export interface CardData {
  face: string;
  url: string;
  back: string;
  toString(): string;
}

interface CardProps {
  card: CardData;
  reveal: boolean;
}

export class Card extends Component<CardProps> {
  static displayName = 'Card';

  constructor(props: CardProps) {
    super(props);
    console.log(`Card passed to ctor ${props.card.face}`);
  }

  private textCardValue(): string {
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

