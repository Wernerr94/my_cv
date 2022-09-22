import styled from "styled-components";
import vars, { pxToRem } from "../../helpers/variables";

export const BoxContainer = styled.article`
  background-color: ${vars.darkGreen};
  width: ${pxToRem(300)};
  height: ${pxToRem(400)};
  text-align: center;
  margin: auto;
  box-sizing: border-box;
  padding: ${pxToRem(20)};
  @media (min-width: 768px) {
    width: ${pxToRem(500)};
    height: ${pxToRem(600)};
    margin-top: ${pxToRem(100)};
    padding: ${pxToRem(100)};
  }
  @media (min-width: 1024px) {
    width: ${pxToRem(700)};
  }
`;
export const Title = styled.h1`
  margin: auto;
  color: ${vars.white};
  font-family: ${vars.mainFont};
  font-weight: 700;
`;
export const Description = styled.p`
  color: ${vars.white};
  font-family: ${vars.italicFont};
  font-weight: 300;
  font-size: ${vars.md};
  @media (min-width: 768px) {
    line-height: ${vars.xl};
  }
`;
export const ShortResumeButton = styled.div`
  width: ${pxToRem(200)};
  height: ${pxToRem(60)};
  border: ${pxToRem(1)} solid ${vars.orange};
  margin: auto;
  padding: ${pxToRem(20)};
  & span {
    color: ${vars.white};
    font-size: ${vars.md};
    font-family: ${vars.mainFont};
  }
  &:focus {
    border-color: ${vars.white};
  }
  &:active {
    transform: scale(0.95);
  }
  &::after {
    content: "";
    display: block;
    width: 100%;
    margin: auto;
    border-bottom: ${pxToRem(1)} solid ${vars.orange};
    margin-top: ${pxToRem(70)};
    @media (min-width: 768px) {
      margin-top: ${pxToRem(100)};
    }
  }
`;
