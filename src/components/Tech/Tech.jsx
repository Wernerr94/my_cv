import React, { useState } from "react";
import {
  TechContainer,
  List,
  LangList,
  LangProgresMax,
  LangProgresMid,
} from "./Tech.styled";
import { useSpring } from "@react-spring/web";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css";

export default function Tech() {
  const [fill, setFill] = useState(false);
  const propsMax = useSpring({ width: fill ? 200 : 0 });
  const propsMid = useSpring({ width: fill ? 100 : 0 });

  // do list with SVG icons
  return (
    <TechContainer id="tech">
      <List>
        <li>
          <ScrollAnimation animateIn="wobble" initiallyVisible={true}>
            <img src="/public/logo512.png" alt="react logo" />
          </ScrollAnimation>
        </li>

        <li>
          <img src="/src/redux.png" alt="redux logo" />
        </li>
        <li>
          <img src="/js.png" alt="JavaScript logo" />
        </li>
        <li>
          <img src="/html.png" alt="HTML logo" />
        </li>
        <li>
          <img src="/css3.png" alt="CSS logo" />
        </li>
        <li>
          <img src="/sass.png" alt="SASS logo" />
        </li>
        <li>
          <img src="/styled.png" alt="styled-components logo" />
        </li>
        <li>
          <img src="/github.png" alt="GIT logo" />
        </li>
        <li>
          <img src="/PS.png" alt="Adobe Photoshop logo" />
        </li>
      </List>
      <LangList onClick={() => setFill(!fill)}>
        <li>
          English
          <LangProgresMid style={propsMid} />
        </li>
        <li>
          Czech
          <LangProgresMid style={propsMid} />
        </li>
        <li>
          Ukranian
          <LangProgresMax style={propsMax} />
        </li>
        <li>
          Russian <LangProgresMax style={propsMax} />
        </li>
      </LangList>
    </TechContainer>
  );
}
