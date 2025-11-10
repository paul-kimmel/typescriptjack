import { it, expect } from 'vitest';
import { cards } from './cards';
import { Card } from './card';

it('Test TextCardValue', async () => {

  const card = cards[2];
  const o = new Card({card, reveal: false});
  console.log(`Card text value: ${o.textCardValue()}`);
  expect(o.textCardValue()).toEqual("3♠");

});

it('Test reveal', async () => {

  const card = cards[2];
  const o = new Card({ card, reveal: false });
    
  console.log(`Reveal state: ${o.props.reveal}`);

  expect(o.props.reveal).toBe(false);
  

});

it("52 Cards In Deck", () => {

  console.log(`Number of cards: ${cards.length}`);
  expect(cards.length).toBe(52);

});
