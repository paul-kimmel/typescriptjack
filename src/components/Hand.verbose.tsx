import React, { Component } from "react";
import { type CardData, Card } from "./card";
import './hand.scss';

export interface HandProps{
  displayName: string;
  hand: CardData[];
  reveal: boolean;
  count: () => number;
  getTextHand: () => string;
}

export class Hand extends Component<{hand : CardData[], reveal: boolean}> {

  static displayName = Hand.name;
  
  // eslint-disable-next-line no-useless-constructor
  constructor(props : {hand: CardData[], reveal : boolean}) {
    super(props);
  }

  count = () => this.props.hand.length;
  getTextHand = () => this.props.hand.map((item) => item.toString()).join("");


  render() {
    return (
      <div className="hand">
        {this.props.hand.map((card, index) => {
          console.log(index);
          return <Card  key={index} card={card} reveal={index > 0 || this.props.reveal} />
        })}
      </div>
    );
  };
}
