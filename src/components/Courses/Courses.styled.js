import styled from "styled-components";
import vars from "../../helpers/variables";
import { pxToRem } from "../../helpers/variables";

export const Title = styled.h2`
  font-family: ${vars.mainFont};
  color: ${vars.orange};
`;

export const CoursesSection = styled.section`
  max-width: 1440px;
  margin: ${pxToRem(10)};
  background-color: ${vars.darkGreen};
  cursor: pointer;
  @media (min-width: 768px) {
    width: 70%;
    margin: auto;
    background: 0;
  }
  & img {
    display: block;
    margin: auto;
  }
`;
export const CourseArticle = styled.article`
  position: relative;
  padding: ${pxToRem(10)};
  border-radius: ${pxToRem(30)};

  @media (min-width: 768px) {
    &:hover {
      border-bottom: ${pxToRem(10)} solid ${vars.darkGreen};
      border-left: ${pxToRem(10)} solid ${vars.darkGreen};

      /* outline: ${pxToRem(1)} solid ${vars.orange}; */
      box-shadow: ${pxToRem(-5)} ${pxToRem(-5)} ${pxToRem(10)} #000;
      padding: ${pxToRem(10)} ${pxToRem(5)} 0 ${pxToRem(5)};
      transition: 0.5s;
    }
    /* &:first-child {
      &::after {
        content: "";
        display: block;
        position: absolute;
        left: 50%;
        bottom: -${pxToRem(90)};
        background-color: ${vars.orange};
        height: ${pxToRem(60)};
        width: ${pxToRem(2)};
      }
    }
    &:nth-child(2) {
      &::after {
        content: "";
        display: block;
        position: absolute;
        left: 70%;
        bottom: -${pxToRem(90)};
        background-color: ${vars.orange};
        height: ${pxToRem(60)};
        width: ${pxToRem(2)};
      }
    } */
    &:not(:nth-child(3)) {
      margin-bottom: ${pxToRem(60)};
    }
  }
`;
export const CourseDescription = styled.p`
  font-family: ${vars.italicFont};
  font-size: ${vars.lg};
  padding: ${pxToRem(10)};
  color: ${vars.white};
`;

export const Link = styled.a`
  display: block;
  margin: auto;
  cursor: pointer;
`;
