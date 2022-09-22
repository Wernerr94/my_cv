import styled from "styled-components";
import vars, { pxToRem } from "../../helpers/variables";

export const Wrapper = styled.div`
  height: ${pxToRem(300)};
  /* background-image: linear-gradient(
      to top,
      rgba(82, 121, 111, 0.5),
      rgba(47, 62, 70, 0.5)
    ),
    url("https://i.pinimg.com/736x/f5/96/27/f59627ef5f18a900c1318fbe4e43916c--model-headshots-men-photography.jpg"); */
  /* background-repeat: no-repeat, no-repeat;
  background-position: top;
  background-size: 100%; */
  margin-top: ${pxToRem(50)};
  margin-left: ${pxToRem(20)};
  max-width: 1440px;

  @media (min-width: 768px) {
    padding-top: ${pxToRem(80)};
    margin-left: ${pxToRem(100)};
  }
  @media (min-width: 1024px) {
    padding: 0 ${pxToRem(100)};
    height: ${pxToRem(400)};
    margin: auto;
    /* text-align: center; */
  }
`;
export const GreetText = styled.p`
  font-family: ${vars.mainFont};
  font-size: ${vars.xl};
  font-weight: 700;
  color: ${vars.white};
  width: 300px;
  margin: 0;
  & span {
    color: ${vars.orange};
  }
  @media (min-width: 768px) {
    font-size: ${vars.title};
  }
  @media (min-width: 1024px) {
    font-size: ${vars.titleXxl};
  }
`;

export const PosText = styled.p`
  font-family: ${vars.italicFont};
  font-size: ${vars.lg};
  font-weight: 300;
  color: ${vars.white};
  @media (min-width: 768px) {
    font-size: ${vars.xl};
  }
  @media (min-width: 1024px) {
    font-size: ${vars.title};
  }
`;
