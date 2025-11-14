
import { cards } from "../components/cards";
import { DealerHand } from "../components/dealerHand";
import { PlayerHands } from "../components/playerHands";

export function TestHands(){
  return (
    <>
      <DealerHand hand={cards.slice(0,2)} reveal={false} />
      <PlayerHands hands={[cards.slice(12,15), cards.slice(32,35)]}  />
    </>
  )
}