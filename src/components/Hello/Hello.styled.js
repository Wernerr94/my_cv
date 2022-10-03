import styled from "styled-components";
import vars, { pxToRem } from "../../helpers/variables";
import myImg from "../../img/me.jpg";

export const Container = styled.div`
  background-image: linear-gradient(
      to top,
      rgba(82, 121, 111, 0.5),
      rgba(47, 62, 70, 0.5)
    ),
    url(${myImg});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding-top: ${pxToRem(60)};
  padding-bottom: ${pxToRem(140)};
  @media (max-width: 500px) {
    background-position: -60%;
  }
  @media (max-width: 767px) {
    background-position: top ${pxToRem(200)};
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    padding: ${pxToRem(180)} 0;
    background-position: -85% 0;
  }
  @media (min-width: 1024px) {
    padding-top: ${pxToRem(200)};
  }
`;
export const Wrapper = styled.div`
  height: ${pxToRem(300)};
  padding: ${pxToRem(80)} 0;
  margin-left: ${pxToRem(20)};
  max-width: 1440px;

  @media (min-width: 768px) {
    /* padding: ${pxToRem(180)} 0; */
    margin-left: ${pxToRem(100)};
  }
  @media (min-width: 1024px) {
    padding: 0 ${pxToRem(100)};
    height: ${pxToRem(400)};
    margin: auto;
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
    padding-left: ${pxToRem(200)};
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
    font-size: ${vars.xl};
    padding-left: ${pxToRem(200)};
  }
`;
