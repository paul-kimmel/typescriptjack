//import { useState } from 'react'
import { Card, type CardData } from './components/card';
import {cards} from './components/cards';

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
      <Card card={cards[25]} reveal={true} />
    </>
  )
}

export default App
