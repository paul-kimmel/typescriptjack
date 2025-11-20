//in-progress
import React, { useEffect, useState } from "react";
// src/components/GameWrapper.ts
// Simple stub for GameWrapper used by NavMenu.
// Replace with real game logic as needed.


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
import GameWrapper from "./GameWrapper";

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
    
    switch (event.key) {
      case "d": // D - double
      case "D":
        doubleClick();
        break;
      case 'S': // S - split
      case 's':
        splitClick();
        break;
      case " ": // Space - hit or deal
        hitClick();
        break;
      case "Enter": // Enter
        standClick();
        break;
      case "X": // X - surrender
      case "x":
        surrenderClick();
        break;
      case "ArrowUp": // Up arrow or +
      case "+":
        increaseBetClick();
        break;
      case "ArrowDown": // Down arrow or -
      case "-":
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
          BlackJack
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse
          className="d-sm-inline-flex flex-sm-row-reverse"
          isOpen={!collapsed}
          navbar
        >
          <ul className="navbar-nav flex-grow">
            <li className="nav-item">
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
            </li>
            <li className="nav-item">
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
            </li>
            <li className="nav-item">
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
            </li>
          </ul>
        </Collapse>
      </Navbar>
    </header>
  );
};
NavMenu.displayName = "NavMenu";
