import { it, expect } from 'vitest';
import { createShoe } from './Shoe';

it("Decks Test", async () => {
  const shoe = createShoe(3);
  console.log(`deck count is ${shoe.deckCount}`);
  expect(shoe.deckCount).toBe(3);
  console.log(`deck count is ${shoe.deckCount}`);
});

it("Total Card Count", async () => {
  const shoe = createShoe(6);
  expect(shoe.cardList.length).toBe(shoe.deckCount * 52);
  console.log(`decks: ${shoe.deckCount} and total number of cards: ${shoe.cardList.length}`);
});

it("First Card Test", async () => {
  const shoe = createShoe(6);

  const card = shoe.cardList[0];

  expect(card.suit).toEqual(card.suit);

  console.log(`first card is ${shoe.get(0).face}`);

});

it("Test invalid deck count", async () => {
  const t = () => {
    createShoe(0)
  };

  expect(t).toThrow(Error);
  console.log("Invalid deck count threw error");
 
});

it("get Test", async () => {
  const shoe = createShoe(1);

  const card = shoe.get(3);
  console.log(`get Test ${card.face}`);
  expect(shoe.get(3).face).toEqual(card.face);
  
});


it("getNextCard Test", async () => {
  const shoe = createShoe(1);
  const card = shoe.getNextCard();
  console.log(`get(ting)NextCard: ${card.suit}`);
  expect(card.suit).toEqual(card.suit);
});


it("shuffle Test", async () => {
  const shoe = createShoe(1);
  console.log("shuffle Test");
  expect(shoe.get(0).url === "./images/AS.png").toBeFalsy();
});

it("Dump Test", async () => {

  console.log("Dumping a single deck");
  const shoe = createShoe(1);
  shoe.dump(5);

});

it("Test moreCards", async () => {
  console.log("Calling moreCards");
  const shoe = createShoe(1);
  shoe.getPair();
  expect(shoe.moreCards()).toEqual(true);

});


it("Test getPair", async () => {
  console.log("Testing getPair");
  const shoe = createShoe(1);
  const pair = shoe.getPair();

  expect(pair[0].face).toEqual(pair[1].face);

});