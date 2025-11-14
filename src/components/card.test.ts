import React from "react";
import { it, expect } from "vitest";
import { cards } from "./cards";
import { textCardValue, Card, type CardProps } from "./card";

it("Test TextCardValue", async () => {
  const card = cards[2];
  const element = React.createElement(Card, { card: card, reveal: false });

  console.log(`Card text value: ${textCardValue(element.props.card)}`);
  expect(textCardValue(card)).toEqual("3♠");
});

it("Test reveal", async () => {
  const o = cards[2];
  const element = React.createElement<CardProps>(Card, {
    card: o,
    reveal: false,
  });
  expect(element.props.reveal).toBe(false);
});

it("52 Cards In Deck", () => {
  console.log(`Number of cards: ${cards.length}`);
  expect(cards.length).toBe(52);
});
