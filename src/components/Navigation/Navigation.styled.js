import styled from "styled-components";
import vars from "../../helpers/variables";
import { pxToRem } from "../../helpers/variables";

export const Nav = styled.nav`
  background-color: transparent;

  max-width: 100vw;
  height: ${pxToRem(50)};
  @media (min-width: 768px) {
    margin-bottom: ${pxToRem(100)};
  }
  @media (min-width: 1024px) {
    box-shadow: ${pxToRem(1)} ${pxToRem(1)} ${pxToRem(20)} #000;
  }
`;
export const Link = styled.a`
  font-family: ${vars.italicFont};
  font-size: ${vars.xl};
  text-decoration: none;
  color: ${vars.orange};
  margin-bottom: ${pxToRem(30)};
`;

export const MenuIcon = styled.div`
  background-color: ${vars.deepGreen};
  display: block;
  /* width: ${pxToRem(800)};
  height: ${pxToRem(800)}; */
  width: ${(props) => (props.opened ? `100vw` : `${pxToRem(0)}`)};
  height: ${(props) => (props.opened ? `100vw` : `${pxToRem(0)}`)};
  border-radius: 50%;
  position: absolute;

  animation-name: ${(props) =>
    props.opened ? "scale-roundIn" : "scale-roundOut"};
  animation-duration: 1s;
  animation-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
  @keyframes scale-roundIn {
    0% {
      width: ${pxToRem(1)};
      height: ${pxToRem(1)};
      rotate: calc(240deg);
    }

    100% {
      opacity: 1;
      /* width: ${pxToRem(400)};
      height: ${pxToRem(400)}; */
      width: 100vw;
      height: 100vw;
    }
  }

  @keyframes scale-roundOut {
    0% {
      width: 100vw;
      height: 100vw;
    }

    100% {
      width: ${pxToRem(1)};
      height: ${pxToRem(1)};
      rotate: calc(-120deg);
      /* top: 2.5%;
      right: 6%; */
    }
  }
  @media (min-width: 1024px) {
    display: none;
  }
`;
export const List = styled.ul`
  display: none;
  max-width: 1440px;
  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-evenly;

    margin: auto;
  }
`;
export const ListItem = styled.li`
  margin: ${pxToRem(15)} 0;
  @media (min-width: 1024px) {
    & a {
      font-size: ${vars.md};
      color: ${vars.white};
      &:hover {
        color: ${vars.orange};
        transition-duration: 0.5s;
      }
    }
  }
`;

export const Icon = styled.span`
  display: ${(props) => (props.opened ? "none" : "inline-block")};
  text-align: center;
  line-height: ${pxToRem(50)};
  width: ${pxToRem(50)};
  height: ${pxToRem(50)};
  color: ${vars.white};
  position: absolute;
  top: 0;
  right: 0;
  animation-name: scale;
  animation-duration: 1s;
  animation-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
  @keyframes scale {
    0% {
      transform: rotate(240deg);
      color: ${vars.white};
    }
    50% {
      color: ${vars.orange};
    }
    100% {
      color: ${vars.white};
    }
  }
  @media (min-width: 768px) {
    font-size: ${vars.xl};
  }
  @media (min-width: 1024px) {
    display: none;
  }
`;

export const CloseIcon = styled.span`
  text-align: center;
  line-height: ${pxToRem(50)};
  color: ${vars.white};
  display: ${(props) => (props.opened ? "inline-block" : "none")};
  width: ${pxToRem(50)};
  height: ${pxToRem(50)};
  position: absolute;
  top: 0;
  right: 0;
  animation-name: scale-out;
  animation-duration: 1.5s;
  animation-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
  @keyframes scale-out {
    0% {
      transform: rotate(-240deg);
      color: ${vars.white};
    }
    50% {
      color: ${vars.orange};
    }
    100% {
      color: ${vars.white};
    }
  }
  @media (min-width: 768px) {
    font-size: ${vars.xl};
  }
  @media (min-width: 1024px) {
    display: none;
  }
`;
