import React from "react";
import { Container, Wrapper, GreetText, PosText } from "./Hello.styled";
import About from "../About/About";
import { useTranslation } from "react-i18next";

export default function Hello() {
  const { t } = useTranslation();
  const language = localStorage.getItem("i18nextLng");

  return (
    <Container>
      <Wrapper id="home">
        {language === "cz" ? (
          <GreetText>{t("i")}</GreetText>
        ) : (
          <GreetText>
            I<span>`</span>M
          </GreetText>
        )}

        <GreetText>OLEKSANDR</GreetText>
        <GreetText>
          VERNER<span>.</span>
        </GreetText>
        <PosText>{t("position")}</PosText>
      </Wrapper>
      <About />
    </Container>
  );
}
