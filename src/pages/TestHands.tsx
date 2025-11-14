
import { cards } from "../components/cards";
import { DealerHand } from "../components/dealerHand";
import { Footer } from "../components/footer";
import { PlayerHands } from "../components/playerHands";
import "../components/Game.scss";

export function TestHands(){
  return (
    <>
      <div className="game-table">

        <DealerHand hand={cards.slice(0,2)} reveal={false} />
        <PlayerHands hands={[cards.slice(12,15), cards.slice(32,35)]}  />
        
      </div>
      <Footer playerBestHand="17" playerBet={25} playerBalance={500} dealerCard="A" hint="Hit"   />
    </>
  )
}