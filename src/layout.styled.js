import styled from "styled-components";
import vars, { pxToRem } from "./helpers/variables";
import { animated } from "@react-spring/web";

export const ToTopButton = styled(animated.div)`
  position: fixed;
  right: ${pxToRem(10)};
  bottom: ${pxToRem(10)};
  width: ${pxToRem(50)};
  height: ${pxToRem(50)};
  background-color: ${vars.darkGreen};
  border-radius: 50%;
  text-align: center;
  cursor: pointer;
  padding: ${pxToRem(8)};

  & span {
    /* line-height: ${vars.lg}; */
    color: ${vars.orange};
    font-size: ${vars.xl};
  }
  @media (min-width: 768px) {
    right: ${pxToRem(20)};
    bottom: ${pxToRem(20)};
  }
`;
