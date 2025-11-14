import { Card } from "../components/card";
import { cards } from "../components/cards";
import "./CardTrick.scss";


export function CardTrick(){

  return (
    <div className="spin">
      <Card card={cards[10]} reveal={true} />
    </div>
  );
}