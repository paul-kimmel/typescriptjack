import { cards } from './cards';
import { type CardData } from './card';


export interface Shoe{
  deckCount: number;
  cardList: CardData[];
  initialize: () => void;
  shuffle: () => void;
  addDecks: () => void;
  getNextCard: () => CardData;
  count: () => number;
  moreCards: () => boolean;
  dump: (limit?: number) => void;
  get: (index: number) => CardData;
  getPair: () => CardData[];
  remove: (card: CardData) => void;
  removeAt: (index: number) => CardData[] | undefined;
}

export function createShoe(deckCount: number) :Shoe {

  if (deckCount <= 0) throw new Error(`Invalid deck count ${deckCount}`);
  let cardList: CardData[] = [];

  function addDecks(){
    for (let i = 0; i < deckCount; i++) cardList.push(...cards);
  }

  function shuffle(){
    let current = cardList.length, random;
    while (current !== 0) {
      random = Math.floor(Math.random() * current);
      current--;
      [cardList[current], cardList[random]] = [cardList[random], cardList[current]];
    }
  }

  function initialize() {
   cardList = [];
   addDecks();
   shuffle();
  }
   
 
  initialize();

  function remove(card : CardData): void {
    removeAt(cardList.indexOf(card));
  }

  function removeAt(index : number) {
    try {
      return cardList.splice(index, 1);
    }
    catch (e) {
      console.log(e);
    }
  }

  function getPair() :CardData[] {
    const card1 = getNextCard();
    let cards : CardData[] = [];
    cards.push(card1);

    for (let i = 0; i < cardList.length; i++) {
      let result = get(i);

      if (card1.face === result.face) {
        removeAt(i);
        cards.push(result);
        return cards;
      }
    }

    throw new Error("No matching card for split hand");
  }

  function get(index : number) {
    return cardList[index];
  }

  function count() : number {
    return cardList.length;
  }

   function getNextCard() : CardData {
    console.log(`getNextCard called, remaining cards: ${count()}`);
    if (count() === 0) initialize();
    const card =  cardList.shift();
    if(!card) throw new Error("No cards left in shoe");
    return card;
  }

  function moreCards(): boolean {
    return cardList.length > 0;
  }

  function dump(limit?: number | undefined): void {
    if (limit === undefined) {
      limit = cardList.length;
    }

    for (let i = 0; i < cardList.length && i < limit; i++) {
      console.log(get(i).face);
    }
  }

  return {deckCount, cardList, initialize, shuffle, addDecks, getNextCard, count, moreCards, 
    dump, get, getPair, remove, removeAt};
}