import { it, expect } from 'vitest';
import { Hand } from './hand';
import { cards } from './cards';


it("Hand.test.tsx", async () => {
  
  console.log("Running hand.test.tsx");

});

it("Add Card Test", async () => {

  const hand = new Hand({ hand : [cards[0], cards[1], cards[2]], reveal: true});

  console.log(`Card: count(${hand.count()}) ${hand.getTextHand()}`);
  expect(hand.count()).toBe(3);
  expect(hand.getTextHand()).toEqual("A♠2♠3♠");

});

it("Test getTextHand", async () => {

  const hand = new Hand({ hand: [cards[0], cards[13]], reveal: true });
  console.log(hand.getTextHand());
  expect(hand.getTextHand()).toEqual("A♠A♣");

});

it("Count Number of Cards In Hand", () => {
  const hand = new Hand({ hand: [cards[0], cards[13], cards[41]], reveal : true });
  console.log(hand.count());
  expect(hand.count()).toBe(3);
});
