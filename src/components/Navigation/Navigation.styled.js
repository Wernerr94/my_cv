import styled from "styled-components";
import vars from "../../helpers/variables";
import { pxToRem } from "../../helpers/variables";

export const LangButton = styled.button`
  margin: ${pxToRem(5)};
  background: transparent;
  width: ${pxToRem(40)};
  height: ${pxToRem(40)};
  border: ${pxToRem(2)} solid ${vars.orange};
  border-radius: 50%;
  padding: ${pxToRem(2)};
  color: ${vars.orange};
  position: absolute;
  top: 1%;
  left: 1%;
  &:active {
    scale: calc(0.9);
  }

  & p {
    margin: 0;
    padding: 0;
  }
  & p:first-child {
    border-bottom: ${pxToRem(1)} solid ${vars.orange};
  }
`;

export const Nav = styled.nav`
  background-color: ${vars.darkGreen};
  position: sticky;
  z-index: 1;
  width: 100%;
  height: ${pxToRem(50)};
  @media (min-width: 1024px) {
    position: relative;
    padding: 0 ${pxToRem(200)};
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
  background-color: ${vars.darkGreen};
  display: block;

  width: ${(props) => (props.opened ? `${pxToRem(400)}` : `${pxToRem(0)}`)};
  height: ${(props) => (props.opened ? `${pxToRem(400)}` : `${pxToRem(0)}`)};
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: -40%;
  overflow: hidden;
  animation-name: ${(props) =>
    props.opened ? "scale-roundIn" : "scale-roundOut"};
  animation-duration: 1s;
  animation-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
  @keyframes scale-roundIn {
    0% {
      width: ${pxToRem(0)};
      height: ${pxToRem(0)};
      rotate: calc(240deg);
      opacity: 0;
    }

    100% {
      opacity: 1;
      width: ${pxToRem(400)};
      height: ${pxToRem(400)};
      /* width: 100vw;
      height: 100vw; */
    }
  }

  @keyframes scale-roundOut {
    0% {
      width: ${pxToRem(400)};
      height: ${pxToRem(400)};
      /* width: 100vw;
      height: 100vw; */
      opacity: 1;
    }

    100% {
      width: ${pxToRem(0)};
      height: ${pxToRem(0)};
      rotate: calc(120deg);
      opacity: 0;
      /* top: 2.5%;
      right: 6%; */
    }
  }
  @media (min-width: 767px) {
    right: -15%;
  }
  @media (min-width: 1024px) {
    display: none;
  }
`;
export const List = styled.ul`
  margin-top: ${pxToRem(100)};
  margin-left: ${pxToRem(100)};
  @media (min-width: 1024px) {
    max-width: 1440px;
    display: flex;
    justify-content: space-evenly;
    margin: auto;
  }
`;
export const ListItem = styled.li`
  margin: ${pxToRem(15)} 0;
  & a {
    font-size: ${vars.md};
    color: ${vars.orange};
    &:hover {
      color: ${vars.white};
      transition-duration: 0.5s;
    }
  }
  @media (min-width: 1024px) {
    & a {
      font-size: ${vars.sm};
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
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;

  cursor: pointer;

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
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;

  cursor: pointer;

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
