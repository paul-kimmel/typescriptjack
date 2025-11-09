import aceSpades from "./images/AS.png";
import twoSpades from "./images/2S.png";
import threeSpades from "./images/3S.png";
import fourSpades from "./images/4S.png";
import fiveSpades from "./images/5S.png";
import sixSpades from "./images/6S.png";
import sevenSpades from "./images/7S.png";
import eightSpades from "./images/8S.png";
import nineSpades from "./images/9S.png";
import tenSpades from "./images/10S.png";
import jackSpades from "./images/JS.png";
import queenSpades from "./images/QS.png";
import kingSpades from "./images/KS.png";
import aceClubs from "./images/AC.png";
import twoClubs from "./images/2C.png";
import threeClubs from "./images/3C.png";
import fourClubs from "./images/4C.png";
import fiveClubs from "./images/5C.png";
import sixClubs from "./images/6C.png";
import sevenClubs from "./images/7C.png";
import eightClubs from "./images/8C.png";
import nineClubs from "./images/9C.png";
import tenClubs from "./images/10C.png";
import jackClubs from "./images/JC.png";
import queenClubs from "./images/QC.png";
import kingClubs from "./images/KC.png";
import aceHearts from "./images/AH.png";
import twoHearts from "./images/2H.png";
import threeHearts from "./images/3H.png";
import fourHearts from "./images/4H.png";
import fiveHearts from "./images/5H.png";
import sixHearts from "./images/6H.png";
import sevenHearts from "./images/7H.png";
import eightHearts from "./images/8H.png";
import nineHearts from "./images/9H.png";
import tenHearts from "./images/10H.png";
import jackHearts from "./images/JH.png";
import queenHearts from "./images/QH.png";
import kingHearts from "./images/KH.png";
import aceDiamonds from "./images/AD.png";
import twoDiamonds from "./images/2D.png";
import threeDiamonds from "./images/3D.png";
import fourDiamonds from "./images/4D.png";
import fiveDiamonds from "./images/5D.png";
import sixDiamonds from "./images/6D.png";
import sevenDiamonds from "./images/7D.png";
import eightDiamonds from "./images/8D.png";
import nineDiamonds from "./images/9D.png";
import tenDiamonds from "./images/10D.png";
import jackDiamonds from "./images/JD.png";
import queenDiamonds from "./images/QD.png";
import kingDiamonds from "./images/KD.png";
import cardBack from "./images/back.png";

export const cards = [
  {
    index: 0,
    face: "ace",
    lowValue: 1,
    highValue: 11,
    textSuit: "spades",
    suit : "♠",
    url: aceSpades,
    back: cardBack,    
    toString: () =>  "A♠" 
  },
  {
    index: 1,
    face: "two",
    lowValue: 2,
    highValue: 2,
    textSuit: "spades",
    suit: "♠",
    url: twoSpades,
    back: cardBack,    
    toString : () => "2♠"
    
  },
  {
    index: 2,
    face: "three",
    lowValue: 3,
    highValue: 3,
    textSuit: "spades",
    suit: "♠",
    url: threeSpades,
    back: cardBack,    
    toString: () => "3♠"
  },
  {
    index: 3,
    face: "four",
    lowValue: 4,
    highValue: 4,
    textSuit: "spades",
    suit: "♠",
    url: fourSpades,
    back: cardBack,    
    toString: () => "4♠"
  },
  {
    index: 4,
    face: "five",
    lowValue: 5,
    highValue: 5,
    textSuit: "spades",
    suit: "♠",
    url: fiveSpades,
    back: cardBack,    
    toString: () => "5♠"
  },
  {
    index: 5,
    face: "six",
    lowValue: 6,
    highValue: 6,
    textSuit: "spades",
    suit: "♠",
    url: sixSpades,
    back: cardBack,    
    toString: () => "6♠"
  },
  {
    index: 6,
    face: "seven",
    lowValue: 7,
    highValue: 7,
    textSuit: "spades",
    suit: "♠",
    url: sevenSpades,
    back: cardBack,    
    toString: () => "7♠"
  },
  {
    index: 7,
    face: "eight",
    lowValue: 8,
    highValue: 8,
    textSuit: "spades",
    suit: "♠",
    url: eightSpades,
    back: cardBack,    
    toString: () => "8♠"
  },
  {
    index: 8,
    face: "nine",
    lowValue: 9,
    highValue: 9,
    textSuit: "spades",
    suit: "♠",
    url: nineSpades,
    back: cardBack,    
    toString: () => "9♠"
  },
  {
    index: 9,
    face: "ten",
    lowValue: 10,
    highValue: 10,
    textSuit: "spades",
    suit: "♠",
    url: tenSpades,
    back: cardBack,    
    toString: () => "10♠"
  },
  {
    index: 10,
    face: "jack",
    lowValue: 10,
    highValue: 10,
    textSuit: "spades",
    suit: "♠",
    url: jackSpades,
    back: cardBack,    
    toString: () => "J♠"
  },
  {
    index: 11,
    face: "queen",
    lowValue: 10,
    highValue: 10,
    textSuit: "spades",
    suit: "♠",
    url: queenSpades,
    back: cardBack,    
    toString: () => "Q♠"
  },
  {
    index: 12,
    face: "king",
    lowValue: 10,
    highValue: 10,
    textSuit: "spades",
    suit: "♠",
    url: kingSpades,
    back: cardBack,    
    toString: () => "K♠"
  },
  {
    index: 13,
    face: "ace",
    lowValue: 1,
    highValue: 11,
    textSuit: "clubs",
    suit: "♣",
    url: aceClubs,
    back: cardBack,    
    toString: () => "A♣"
  },
  {
    index: 14,
    face: "two",
    lowValue: 2,
    highValue: 2,
    textSuit: "clubs",
    suit: "♣",
    url: twoClubs,
    back: cardBack,    
    toString: () => "2♣"
  },
  {
    index: 15,
    face: "three",
    lowValue: 3,
    highValue: 3,
    textSuit: "clubs",
    suit: "♣",
    url: threeClubs,
    back: cardBack,    
    toString: () => "3♣"
  },
  {
    index: 16,
    face: "four",
    lowValue: 4,
    highValue: 4,
    textSuit: "clubs",
    suit: "♣",
    url: fourClubs,
    back: cardBack,    
    toString: () => "4♣"
  },
  {
    index: 17,
    face: "five",
    lowValue: 5,
    highValue: 5,
    textSuit: "clubs",
    suit: "♣",
    url: fiveClubs,
    back: cardBack,    
    toString: () => "5♣"
  },
  {
    index: 18,
    face: "six",
    lowValue: 6,
    highValue: 6,
    textSuit: "clubs",
    suit: "♣",
    url: sixClubs,
    back: cardBack,    
    toString: () => "6♣"
  },
  {
    index: 19,
    face: "seven",
    lowValue: 7,
    highValue: 7,
    textSuit: "clubs",
    suit: "♣",
    url: sevenClubs,
    back: cardBack,    
    toString: () => "7♣"
  },
  {
    index: 20,
    face: "eight",
    lowValue: 8,
    highValue: 8,
    textSuit: "clubs",
    suit: "♣",
    url: eightClubs,
    back: cardBack,    
    toString: () => "8♣"
  },
  {
    index: 21,
    face: "nine",
    lowValue: 9,
    highValue: 9,
    textSuit: "clubs",
    suit: "♣",
    url: nineClubs,
    back: cardBack,    
    toString: () => "9♣"
  },
  {
    index: 22,
    face: "ten",
    lowValue: 10,
    highValue: 10,
    textSuit: "clubs",
    suit: "♣",
    url: tenClubs,
    back: cardBack,    
    toString: () => "10♣"
  },
  {
    index: 23,
    face: "jack",
    lowValue: 10,
    highValue: 10,
    textSuit: "clubs",
    suit: "♣",
    url: jackClubs,
    back: cardBack,    
    toString: () => "J♣"
  },
  {
    index: 24,
    face: "queen",
    lowValue: 10,
    highValue: 10,
    textSuit: "clubs",
    suit: "♣",
    url: queenClubs,
    back: cardBack,    
    toString: () => "Q♣"
  },
  {
    index: 25,
    face: "king",
    lowValue: 10,
    highValue: 10,
    textSuit: "clubs",
    suit: "♣",
    url: kingClubs,
    back: cardBack,    
    toString: () => "K♣"
  },
  {
    index: 26,
    face: "ace",
    lowValue: 1,
    highValue: 11,
    textSuit: "hearts",
    suit: "♥",
    url: aceHearts,
    back: cardBack,    
    toString: () => "A♥"
  },
  {
    index: 27,
    face: "two",
    lowValue: 2,
    highValue: 2,
    textSuit: "hearts",
    suit: "♥",
    url: twoHearts,
    back: cardBack,    
    toString: () => "2♥"
  },
  {
    index: 28,
    face: "three",
    lowValue: 3,
    highValue: 3,
    textSuit: "hearts",
    suit: "♥",
    url: threeHearts,
    back: cardBack,    
    toString: () => "3♥"
  },
  {
    index: 29,
    face: "four",
    lowValue: 4,
    highValue: 4,
    textSuit: "hearts",
    suit: "♥",
    url: fourHearts,
    back: cardBack,    
    toString: () => "4♥"
  },
  {
    index: 30,
    face: "five",
    lowValue: 5,
    highValue: 5,
    textSuit: "hearts",
    suit: "♥",
    url: fiveHearts,
    back: cardBack,    
    toString: () => "5♥"
  },
  {
    index: 31,
    face: "six",
    lowValue: 6,
    highValue: 6,
    textSuit: "hearts",
    suit: "♥",
    url: sixHearts,
    back: cardBack,    
    toString: () => "6♥"
  },
  {
    index: 32,
    face: "seven",
    lowValue: 7,
    highValue: 7,
    textSuit: "hearts",
    suit: "♥",
    url: sevenHearts,
    back: cardBack,    
    toString: () => "7♥"
  },
  {
    index: 33,
    face: "eight",
    lowValue: 8,
    highValue: 8,
    textSuit: "hearts",
    suit: "♥",
    url: eightHearts,
    back: cardBack,    
    toString: () => "8♥"
  },
  {
    index: 34,
    face: "nine",
    lowValue: 9,
    highValue: 9,
    textSuit: "hearts",
    suit: "♥",
    url: nineHearts,
    back: cardBack,    
    toString: () => "9♥"
  },
  {
    index: 35,
    face: "ten",
    lowValue: 10,
    highValue: 10,
    textSuit: "hearts",
    suit: "♥",
    url: tenHearts,
    back: cardBack,    
    toString: () => "10♥"
  },
  {
    index: 36,
    face: "jack",
    lowValue: 10,
    highValue: 10,
    textSuit: "hearts",
    suit: "♥",
    url: jackHearts,
    back: cardBack,    
    toString: () => "J♥"
  },
  {
    index: 37,
    face: "queen",
    lowValue: 10,
    highValue: 10,
    textSuit: "hearts",
    suit: "♥",
    url: queenHearts,
    back: cardBack,    
    toString: () => "Q♥"
  },
  {
    index: 38,
    face: "king",
    lowValue: 10,
    highValue: 10,
    textSuit: "hearts",
    suit: "♥",
    url: kingHearts,
    back: cardBack,    
    toString: () => "K♥"
  },

  {
    index: 39,
    face: "ace",
    lowValue: 1,
    highValue: 11,
    textSuit: "diamonds",
    suit: "♦",
    url: aceDiamonds,
    back: cardBack,    
    toString: () => "A♦"
  },
  {
    index: 40,
    face: "two",
    lowValue: 2,
    highValue: 2,
    textSuit: "diamonds",
    suit: "♦",
    url: twoDiamonds,
    back: cardBack,    
    toString: () => "2♦"
  },
  {
    index: 41,
    face: "three",
    lowValue: 3,
    highValue: 3,
    textSuit: "diamonds",
    suit: "♦",
    url: threeDiamonds,
    back: cardBack,    
    toString: () => "3♦"
  },
  {
    index: 42,
    face: "four",
    lowValue: 4,
    highValue: 4,
    textSuit: "diamonds",
    suit: "♦",
    url: fourDiamonds,
    back: cardBack,    
    toString: () => "4♦"
  },
  {
    index: 43,
    face: "five",
    lowValue: 5,
    highValue: 5,
    textSuit: "diamonds",
    suit: "♦",
    url: fiveDiamonds,
    back: cardBack,    
    toString: () => "5♦"
  },
  {
    index: 44,
    face: "six",
    lowValue: 6,
    highValue: 6,
    textSuit: "diamonds",
    suit: "♦",
    url: sixDiamonds,
    back: cardBack,    
    toString: () => "6♦"
  },
  {
    index: 45,
    face: "seven",
    lowValue: 7,
    highValue: 7,
    textSuit: "diamonds",
    suit: "♦",
    url: sevenDiamonds,
    back: cardBack,    
    toString: () => "7♦"
  },
  {
    index: 46,
    face: "eight",
    lowValue: 8,
    highValue: 8,
    textSuit: "diamonds",
    suit: "♦",
    url: eightDiamonds,
    back: cardBack,    
    toString: () => "8♦"
  },
  {
    index: 47,
    face: "nine",
    lowValue: 9,
    highValue: 9,
    textSuit: "diamonds",
    suit: "♦",
    url: nineDiamonds,
    back: cardBack,    
    toString: () => "9♦"
  },
  {
    index: 48,
    face: "ten",
    lowValue: 10,
    highValue: 10,
    textSuit: "diamonds",
    suit: "♦",
    url: tenDiamonds,
    back: cardBack,    
    toString: () => "10♦"
  },
  {
    index: 49,
    face: "jack",
    lowValue: 10,
    highValue: 10,
    textSuit: "diamonds",
    suit: "♦",
    url: jackDiamonds,
    back: cardBack,    
    toString: () => "J♦"
  },
  {
    index: 50,
    face: "queen",
    lowValue: 10,
    highValue: 10,
    textSuit: "diamonds",
    suit: "♦",
    url: queenDiamonds,
    back: cardBack,    
    toString: () => "Q♦"
  },
  {
    index: 51,
    face: "king",
    lowValue: 10,
    highValue: 10,
    textSuit: "diamonds",
    suit: "♦",
    url: kingDiamonds,
    back: cardBack,    
    toString: () => "K♦"
  },

];