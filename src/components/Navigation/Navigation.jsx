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
  const { t } = useTranslation();
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
              <Link href="#home">{t("h")}</Link>
            </ListItem>
            <ListItem>
              <Link href="#about">{t("a")}</Link>
            </ListItem>
            <ListItem>
              <Link href="#tech">{t("t")}</Link>
            </ListItem>
            <ListItem>
              <Link href="#education">{t("e")}</Link>
            </ListItem>
            <ListItem>
              <Link href="#projects">{t("p")}</Link>
            </ListItem>
            <ListItem>
              <Link href="#contact">{t("c")}</Link>
            </ListItem>
          </List>
        )}
        {clicked && (
          <MenuIcon opened={showMenu}>
            <List>
              <ListItem>
                <Link href="#home" onClick={handleMenuOpen}>
                  {t("h")}
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#about" onClick={handleMenuOpen}>
                  {t("a")}
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#tech" onClick={handleMenuOpen}>
                  {t("t")}
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#education" onClick={handleMenuOpen}>
                  {t("e")}
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#projects" onClick={handleMenuOpen}>
                  {t("p")}
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#contact" onClick={handleMenuOpen}>
                  {t("c")}
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
