import { render, screen } from "@testing-library/react";
import { it, expect, test } from "vitest";
import { count, getTextHand, Hand } from "./hand";
import { cards } from "./cards";
import type { CardData } from "./card";

test("renders Hand component", () => {
  render(<Hand hand={[]} reveal={true} />);
  expect(screen.getByRole("group")).toBeInTheDocument();
});

it("Hand.test.tsx", async () => {
  console.log("Running hand.test.tsx");
});

it("Add Card Test", async () => {
  const hand: CardData[] = [];
  hand.push(cards[0]);
  hand.push(cards[1]);
  hand.push(cards[2]);

  console.log(`Card: count(${count(hand)}) ${getTextHand(hand)}`);
  expect(count(hand)).toBe(3);
  expect(getTextHand(hand)).toEqual("A♠2♠3♠");
});

it("Test getTextHand", async () => {
  const hand: CardData[] = [];
  hand.push(cards[0]);
  hand.push(cards[13]);

  console.log(getTextHand(hand));
  expect(getTextHand(hand)).toEqual("A♠A♣");
});

it("Count Number of Cards In Hand", () => {
  const hand: CardData[] = [];
  hand.push(cards[0]);
  hand.push(cards[13]);
  hand.push(cards[41]);

  console.log(count(hand));
  expect(count(hand)).toBe(3);
});
