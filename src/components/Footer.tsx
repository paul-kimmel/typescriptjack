import React from "react";
import "./Footer.scss";

export const Footer: React.FC<{
  playerBestHand: string;
  playerBet: number;
  playerBalance: number;
  dealerCard: string;
  hint: string;
}> = ({ playerBestHand, playerBet, playerBalance, dealerCard, hint }) => {
  const currencyFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <footer className="footer">
      <div>
        <span>Player: {playerBestHand}</span>
      </div>
      <div>
        <span>Bet: {currencyFormat.format(playerBet)}</span>
      </div>
      <div>
        <span>Balance: {currencyFormat.format(playerBalance)}</span>
      </div>
      <div>
        <span>Dealer: {dealerCard}</span>
      </div>
      <div>
        <span>Hint: {hint}</span>
      </div>
    </footer>
  );
};

Footer.displayName = "Footer";
