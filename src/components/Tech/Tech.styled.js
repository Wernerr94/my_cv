import styled from "styled-components";
import vars from "../../helpers/variables";
import { pxToRem } from "../../helpers/variables";
import { animated } from "@react-spring/web";

export const TechContainer = styled.div`
  max-width: 1024px;
  margin-top: ${pxToRem(50)};
  @media (min-width: 768px) {
    width: 70%;
    margin-inline: auto;
  }
  @media (min-width: 1024px) {
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
  }
  & li {
    width: ${pxToRem(140)};
    height: auto;
    margin-bottom: ${pxToRem(20)};
    @media (min-width: 400px) {
      margin-right: ${pxToRem(20)};
    }
    & img {
      width: 100%;
      object-fit: contain;
    }
  }
`;
export const LangList = styled.ul`
  & li {
    display: grid;
    grid-template-columns: 1fr 1fr;
    font-size: ${vars.lg};
    font-family: ${vars.mainFont};
    color: ${vars.white};
    line-height: ${pxToRem(vars.xl)};
  }
`;
export const LangProgresMax = styled(animated.div)`
  display: inline-block;
  width: ${pxToRem(200)};
  height: ${pxToRem(25)};
  background-image: linear-gradient(
    to right,
    ${vars.mediumGreen},
    ${vars.orange}
  );
  margin-left: ${pxToRem(10)};
`;
export const LangProgresMid = styled(animated.div)`
  display: inline-block;
  width: ${pxToRem(100)};
  height: ${pxToRem(25)};
  background-image: linear-gradient(
    to right,
    ${vars.mediumGreen},
    ${vars.orange}
  );
  margin-left: ${pxToRem(10)};
`;
