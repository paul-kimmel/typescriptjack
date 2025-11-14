import React from "react";
import { type CardProps, Card } from "./card";

export const CardTrick: React.FC<CardProps> = ({ card, reveal }) => {
  return <Card card={card} reveal={reveal}></Card>;
};
