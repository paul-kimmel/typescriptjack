import React, { useState, useRef, useEffect } from 'react';
//import Statistics from './Statistics';
import { createShoe, type Shoe } from './Shoe';
import { Outcome } from './playState';
//import { Dealer } from './Dealer';
//import { Player } from './Player';
import {Footer} from './Footer';
//import {Options} from './Options';
//import {Hint} from './Hint';
//import {Recorder} from './Recorder';
import {PlayDecisionEngine} from './PlayDecisionEngine';
//import StatisticsData, {DataPoint} from './StatisticsData';
import './Game.css';
import { Hand } from './hand';


export default function Game(){
  const playerRef = useRef(null);
  const dealerRef = useRef(null);
  const decksRef = useRef(createShoe(6));

  const getNextCard = () => decksRef.current.getNextCard();
  const getHand = () => [getNextCard(), getNextCard()];
  const getSplitHand = () => decksRef.current.getPair();

  const [state, setState] = useState(() => ({
    isGameOver: false,
    isNewGame: true,
    numberOfPlayers: 1,
    dealerHand: getHand(),
    playerHands: [getHand()],
    options: {},// new Options(),
    recorder: {}, //new Recorder(),
    currentIndex: 0,
    playerBestHand: 0,
    playerBet: 25,
    playerBalance: 500,
    dealerCard: '',
    hint: 'None',
    reveal: false,
    statisticsData: {} //new StatisticsData()
  }));

  const getCurrentIndex = () => state.currentIndex;
  const getCurrentHand = () => state.playerHands[getCurrentIndex()];
  const getDealerHand = () => state.dealerHand;
  const getPlayer = () => playerRef.current;
  const getDealer = () => dealerRef.current;

  const isGameOver = ()  => state.isGameOver;
  const isNewGame = () => state.isNewGame;

  const isStanding = (hand) => hand.standing === true;
  const isSurrendered = (hand) => hand.playState === Outcome.Surrender;
  const isBlackJack = (hand) => PlayDecisionEngine.isBlackJack(hand);
  const isBust = (hand) => PlayDecisionEngine.isBust(getCurrentHand());
  const getBestHandValue = (hand) => PlayDecisionEngine.getBestHandValue(hand);

  const getDealerCardOfHand = () =>{
    return state.reveal
      ? getBestHandValue(state.dealerHand)
      : state.dealerHand[1]?.toString();
  };

  const canPlayNewGame = () => state.playerBalance >= state.playerBet;

  const getTotalBet = () =>{
    let total = 0;
    state.playerHands.forEach((hand) =>{
      total += hand.totalBet || 0;
    });
    return total;
  }

  const canDecreaseBet = () =>
    getTotalBet() + state.playerBet <= state.playerBalance;

  const canIncreaseBet = () =>
    getTotalBet() + state.playerBet <= state.playerBalance;

  const isPlayersOnlyHand = () =>
    state.playerHands.length === 1;

  const canSurrenderCurrentHand = ()=>{
    return isGameOver() === false &&
      isPlayersOnlyHand() 
      && PlayDecisionEngine.canSurrenderCurrentHand(getCurrentHand);
  }

  const canDoubleCurrentHand = () => {
    
    return isGameOver() === false &&
      getCurrentHand().length === 2 && canIncreaseBet();
  }


  const doubleCurrentHand = () =>{
    if(canDoubleCurrentHand() === false) return;
      
    const index = getCurrentIndex();

    const updatedHands = state.playerHands.map((hand, i) =>
      i === index ? {...hand, double: true, totalBet: (hand.totalBet || 0) * 2}
      : hand);

    setState(previous => ({...previous, playerHands: updatedHands}));
    dealToPlayer();
    nextSteps();
  }

  const double = () =>{
    if(canDoubleCurrentHand() === false) return;
    doubleCurrentHand();
    record();
  }

  const surrender = () => {
    if(canSurrenderCurrentHand() === false) return;
    canSurrenderCurrentHand();
    nextSteps(); 
    record();
  }

  const surrenderCurrentHand = () => {
    
    const index = getCurrentIndex();
    const updatedHands = state.playerHands.map((hand, i) =>
      i === index ? {...hand, playState: Outcome.Surrender} : hand);

    setState(previous => ({...previous, playerHands: updatedHands}));
  }

  const decreaseBet = () =>{
    if(isGameOver() && canDecreaseBet()){

      setState(previous => ({...previous,
        playerBet: Math.max(25, previous.playerBet - 25)}));
    }
  }

  const increaseBet = () => {
    if(isGameOver() && canIncreaseBet()){
      setState(previous => ({...previous,
        playerBet: Math.max(25, previous.playerBet + 25)}));
    }
  }

  const hit = () =>{
    if(isGameOver() === true){
      newGame();
    }
    else{
      if(canDealToCurrentHand()){
        dealToPlayer();
        record();

        if(isBust(getCurrentHand())) nextSteps();
      }
    }
  }

  const stand = () =>{
    standCurrentHand();
    MediaRecorder();
  }

  const dealToPlayer = () => {
    setState(previous => ({...previous,
      playerHands: previous.playerHands.map((hand, i) =>
        i === previous.currentIndex  ? [...hand, getNextCard()]
        : hand)
  }));}
  
}