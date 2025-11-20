//STOPPED: with gamewrapper stub  and the menu is horky
export interface IGameWrapper {
  hit(): void;
  stand(): void;
  deal(): void;
  newGame(): void;
  surrender(): void;
  split(): void;
  double(): void;
  increaseBet(): void;
  decreaseBet(): void;
  dealSplitGame(): void;
}

const GameWrapper: IGameWrapper = {
  hit() {
    console.log("GameWrapper.hit() called");
  },
  stand() {
    console.log("GameWrapper.stand() called");
  },
  deal() {
    console.log("GameWrapper.deal() called");
  },
  newGame() {
    console.log("GameWrapper.newGame() called");
  },
  surrender() {
    console.log("GameWrapper.surrender() called");
  },
  split() {
    console.log("GameWrapper.split() called");
  },
  double() {
    console.log("GameWrapper.double() called");
  },
  increaseBet() {
    console.log("GameWrapper.increaseBet() called");
  },
  decreaseBet() {
    console.log("GameWrapper.decreaseBet() called");
  },
  dealSplitGame() {
    console.log("GameWrapper.dealSplitGame() called");
  },
};

export default GameWrapper;