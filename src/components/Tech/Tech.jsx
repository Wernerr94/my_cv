import React, { useRef } from "react";
import { Wrapper, TechContainer, List } from "./Tech.styled";
import { useSpring, animated } from "@react-spring/web";
import useIntersection from "../../hooks/useIntersection";
import LanguageList from "../LangList/LanguageList";
import Courses from "../Courses/Courses";

export default function Tech() {
  const ref = useRef();
  const inViewport = useIntersection(ref, "100px");
  const [fadeIn, api] = useSpring(() => ({
    from: { opacity: 0, scale: 0.1 },
    config: {
      duration: 300,
    },
  }));
  if (inViewport) {
    api.start({
      opacity: 1,
      scale: 1,
    });
  }

  const bubble = useSpring({
    loop: { reverse: true },
    from: { scale: 0.95 },
    to: { scale: 1.05 },
    config: {
      duration: 1000,
    },
  });
  const bubbleReverse = useSpring({
    loop: { reverse: true },
    from: { scale: 1.05 },
    to: { scale: 0.95 },
    config: {
      duration: 1000,
    },
  });
  const logoList = [
    "logo512.png",
    "redux.png",
    "js.png",
    "html.png",
    "css3.png",
    "sass.png",
    "styled.png",
    "github.png",
    "PS.png",
  ];

  return (
    <Wrapper>
      <TechContainer style={fadeIn} ref={ref} id="tech">
        <List>
          {logoList.map((logo, index) => {
            if (index % 2) {
              return (
                <animated.li style={bubbleReverse} key={logo}>
                  <img src={require(`../../img/${logo}`)} alt="react logo" />
                </animated.li>
              );
            } else {
              return (
                <animated.li style={bubble} key={logo}>
                  <img src={require(`../../img/${logo}`)} alt="react logo" />
                </animated.li>
              );
            }
          })}
        </List>
      </TechContainer>
      <LanguageList />
      <Courses />
    </Wrapper>
  );
}
