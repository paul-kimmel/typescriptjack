//import { useState } from 'react'
import { Card, type CardData } from './components/card';
import {cards} from './components/cards';
import { Hand } from './components/hand';

import './App.css'

function App() {
  /* Alternate inline object definition 
  const sampleCard :CardData = {
    face: 'Ace of Spades',
    url: '/src/components/images/AS.png',
    back: '/components/images/back.png',
    toString(){
      return this.face;
    }
  }
    */

  return (
    <>
      {/* <Hand hand={[cards[12], cards[2], cards[33]]} reveal={true} /> */}
      <Hand hand={cards.slice(12,15)} reveal={true} />
    </>
  )
}

export default App
