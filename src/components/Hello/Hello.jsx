import React from "react";
import { Wrapper, GreetText, PosText } from "./Hello.styled";

export default function Hello() {
  return (
    <Wrapper>
      <GreetText>
        I<span>`</span>M
      </GreetText>
      <GreetText>OLEKSANDR</GreetText>
      <GreetText>
        VERNER<span>.</span>
      </GreetText>
      <PosText>Front End Developer</PosText>
    </Wrapper>
  );
}
