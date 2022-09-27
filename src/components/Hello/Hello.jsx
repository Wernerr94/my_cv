import React from "react";
import { Container, Wrapper, GreetText, PosText } from "./Hello.styled";
import About from "../About/About";

export default function Hello() {
  return (
    <Container>
      <Wrapper id="home">
        <GreetText>
          I<span>`</span>M
        </GreetText>
        <GreetText>OLEKSANDR</GreetText>
        <GreetText>
          VERNER<span>.</span>
        </GreetText>
        <PosText>Front End Developer</PosText>
      </Wrapper>
      <About />
    </Container>
  );
}
