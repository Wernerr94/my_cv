import React, { useState } from "react";
import {
  Link,
  Nav,
  MenuIcon,
  List,
  ListItem,
  Icon,
  CloseIcon,
} from "./Navigation.styled";

export default function Navigation({ scrollToElement, about }) {
  const [showMenu, setShowMenu] = useState(false);

  function handleMenuOpen() {
    setShowMenu(!showMenu);
  }
  return (
    <>
      <Nav>
        <List>
          <ListItem>
            <Link href="#home" onClick={handleMenuOpen}>
              HOME
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#about" onClick={() => scrollToElement(about)}>
              ABOUT
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#tech" onClick={handleMenuOpen}>
              TECH
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#education" onClick={handleMenuOpen}>
              EDUCATION
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#projects" onClick={handleMenuOpen}>
              PROJECTS
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#contact" onClick={handleMenuOpen}>
              CONTACT
            </Link>
          </ListItem>
        </List>
      </Nav>

      <>
        <MenuIcon opened={showMenu}>
          {/* <List opened={showMenu}>
            <li>
              <Link href="#home" onClick={handleMenuOpen}>
                HOME
              </Link>
            </li>
            <li>
              <Link href="#about" onClick={() => scrollToElement(about)}>
                ABOUT
              </Link>
            </li>
            <li>
              <Link href="#tech" onClick={handleMenuOpen}>
                TECH
              </Link>
            </li>
            <li>
              <Link href="#education" onClick={handleMenuOpen}>
                EDUCATION
              </Link>
            </li>
            <li>
              <Link href="#projects" onClick={handleMenuOpen}>
                PROJECTS
              </Link>
            </li>
            <li>
              <Link href="#contact" onClick={handleMenuOpen}>
                CONTACT
              </Link>
            </li>
          </List> */}
        </MenuIcon>
      </>

      <Icon opened={showMenu} onClick={handleMenuOpen}>
        &#9776;
      </Icon>
      <CloseIcon opened={showMenu} onClick={handleMenuOpen}>
        &#10005;
      </CloseIcon>
    </>
  );
}
