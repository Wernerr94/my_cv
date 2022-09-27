import React, { useState, useEffect } from "react";
import {
  LangButton,
  Link,
  Nav,
  MenuIcon,
  List,
  ListItem,
  Icon,
  CloseIcon,
} from "./Navigation.styled";
import { useTranslation } from "react-i18next";

export default function Navigation() {
  const [showMenu, setShowMenu] = useState(false);
  const [clicked, setClicked] = useState(false);
  const language = localStorage.getItem("i18nextLng");
  const [lang, setLang] = useState(language ? language : "en");
  const [windowWidth, setWindowWidth] = useState(getWidth());
  function handleMenuOpen() {
    setShowMenu(!showMenu);
    if (clicked) {
      setTimeout(() => {
        setClicked(false);
      }, 250);
    } else {
      setClicked(true);
    }
  }
  useEffect(() => {
    function handleWindowResize() {
      setWindowWidth(getWidth());
    }
    function handleCloseMenu() {
      if (window.pageYOffset > 400) {
        setShowMenu(false);
        setClicked(false);
      }
    }
    window.addEventListener("resize", handleWindowResize);
    window.addEventListener("scroll", handleCloseMenu);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
      window.removeEventListener("scroll", handleCloseMenu);
    };
  }, []);

  function getWidth() {
    const { innerWidth } = window;
    return innerWidth;
  }
  const { i18n } = useTranslation();
  function handleLanguage() {
    if (lang === "en" || lang === "en-US") {
      setLang("cz");
      i18n.changeLanguage("cz");
    } else {
      setLang("en");
      i18n.changeLanguage("en");
    }
  }

  return (
    <>
      <Nav>
        <LangButton onClick={handleLanguage} style={{ position: "absolute" }}>
          <p>EN</p>
          <p>CZ</p>
        </LangButton>
        {windowWidth > 1023 && (
          <List>
            <ListItem>
              <Link href="#home">HOME</Link>
            </ListItem>
            <ListItem>
              <Link href="#about">ABOUT</Link>
            </ListItem>
            <ListItem>
              <Link href="#tech">TECH</Link>
            </ListItem>
            <ListItem>
              <Link href="#education">EDUCATION</Link>
            </ListItem>
            <ListItem>
              <Link href="#projects">PROJECTS</Link>
            </ListItem>
            <ListItem>
              <Link href="#contact">CONTACT</Link>
            </ListItem>
          </List>
        )}
        {clicked && (
          <MenuIcon opened={showMenu}>
            <List>
              <ListItem>
                <Link href="#home" onClick={handleMenuOpen}>
                  HOME
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#about" onClick={handleMenuOpen}>
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
          </MenuIcon>
        )}
      </Nav>

      <Icon opened={showMenu} onClick={handleMenuOpen}>
        &#9776;
      </Icon>
      <CloseIcon opened={showMenu} onClick={handleMenuOpen}>
        &#10005;
      </CloseIcon>
    </>
  );
}
