import React from "react";
import {
  BoxContainer,
  // Title,
  ShortResumeButton,
  Description,
} from "./About.styled";
export default function About({ about }) {
  return (
    <BoxContainer ref={about}>
      <Description>
        From the moment I wrote my first line of code I absolutely fell in love
        with programming. Software development has never been "just a job" for
        me, it's engaged me into the challenge of continuously learning and
        improving my skills. In 2022 finished frontend development courses
        html&css, JavaScript and React.js.
      </Description>
      <ShortResumeButton>
        <span>SHORT RESUME</span>
      </ShortResumeButton>
    </BoxContainer>
  );
}
