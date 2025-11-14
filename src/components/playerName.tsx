import React from "react";
import "./playerHand.scss";

export const PlayerName: React.FC<{ playerName: string }> = ({
  playerName,
}) => {
  return <span className="player-name">{playerName}</span>;
};
