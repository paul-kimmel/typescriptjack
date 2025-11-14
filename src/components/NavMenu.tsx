//in-progress
import React, { useEffect, useState } from "react";
// src/components/GameWrapper.ts
// Simple stub for GameWrapper used by NavMenu.
// Replace with real game logic as needed.

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
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  UncontrolledButtonDropdown,
} from "reactstrap";
import { Link } from "react-router-dom";
import "./NavMenu.scss";

export const NavMenu: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => {
    setCollapsed((prev) => !prev);
  };

  const hitClick = () => GameWrapper.hit();
  const standClick = () => GameWrapper.stand();
  const dealClick = () => GameWrapper.deal();
  const newGameClick = () => GameWrapper.newGame();
  const surrenderClick = () => GameWrapper.surrender();
  const splitClick = () => GameWrapper.split();
  const doubleClick = () => GameWrapper.double();
  const increaseBetClick = () => GameWrapper.increaseBet();
  const decreaseBetClick = () => GameWrapper.decreaseBet();
  const dealSplitGameClick = () => GameWrapper.dealSplitGame();

  const onKeyDown = (event: KeyboardEvent) => {
    switch (event.keyCode) {
      case 68: // D - double
        doubleClick();
        break;
      case 83: // S - split
        splitClick();
        break;
      case 32: // Space - hit or deal
        hitClick();
        break;
      case 13: // Enter
        standClick();
        break;
      case 88: // X - surrender
        surrenderClick();
        break;
      case 38: // Up arrow or +
      case 107:
        increaseBetClick();
        break;
      case 40: // Down arrow or -
      case 109:
        decreaseBetClick();
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []); // run once, like componentDidMount/componentWillUnmount

  return (
    <header>
      <Navbar
        className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3"
        container
        light
      >
        <NavbarBrand tag={Link} to="/">
          ReactJack
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse
          className="d-sm-inline-flex flex-sm-row-reverse"
          isOpen={!collapsed}
          navbar
        >
          <ul className="navbar-nav flex-grow">
            <UncontrolledButtonDropdown>
              <DropdownToggle nav>Game</DropdownToggle>
              <DropdownMenu>
                <DropdownItem tag={Link} to="/game" onClick={newGameClick}>
                  New Game
                </DropdownItem>
                <DropdownItem tag={Link} onClick={dealClick}>
                  Deal
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>

            <UncontrolledButtonDropdown>
              <DropdownToggle nav>Choices</DropdownToggle>
              <DropdownMenu>
                <DropdownItem tag={Link} onClick={hitClick}>
                  Hit<span style={{ float: "right" }}>Space</span>
                </DropdownItem>
                <DropdownItem tag={Link} onClick={doubleClick}>
                  Double<span style={{ float: "right" }}>D</span>
                </DropdownItem>
                <DropdownItem tag={Link} onClick={splitClick}>
                  Split<span style={{ float: "right" }}>S</span>
                </DropdownItem>
                <DropdownItem tag={Link} onClick={surrenderClick}>
                  Surrender<span style={{ float: "right" }}>X</span>
                </DropdownItem>
                <DropdownItem tag={Link} onClick={standClick}>
                  Stand<span style={{ float: "right" }}>Enter</span>
                </DropdownItem>
                <DropdownItem disabled tag={Link} to="/draw-card">
                  Insurance
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem tag={Link} onClick={increaseBetClick}>
                  <span style={{ float: "right" }}>↑</span>Increase Bet
                </DropdownItem>
                <DropdownItem tag={Link} onClick={decreaseBetClick}>
                  Decrease Bet<span style={{ float: "right" }}>↓</span>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem tag={Link} to="/draw-card">
                  Deal
                </DropdownItem>
                <DropdownItem tag={Link} onClick={dealSplitGameClick}>
                  Deal Split
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>

            <UncontrolledButtonDropdown>
              <DropdownToggle nav>Help</DropdownToggle>
              <DropdownMenu>
                <DropdownItem tag={Link} to="/draw-card">
                  About
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem tag={Link} to="/demo-hand">
                  Demo Hand
                </DropdownItem>
                <DropdownItem tag={Link} to="/demo-object">
                  Demo Object
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
          </ul>
        </Collapse>
      </Navbar>
    </header>
  );
};
NavMenu.displayName = "NavMenu";
