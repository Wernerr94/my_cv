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
  border-radius: ${pxToRem(50)};

  &:first-child {
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
      left: 50%;
      bottom: -${pxToRem(90)};
      background-color: ${vars.orange};
      height: ${pxToRem(60)};
      width: ${pxToRem(2)};
    }
  }
  &:not(:nth-child(3)) {
    margin-bottom: ${pxToRem(60)};
  }

  @media (min-width: 768px) {
    border: ${pxToRem(30)} solid ${vars.darkGreen};
    outline: ${pxToRem(1)} solid ${vars.orange};
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
