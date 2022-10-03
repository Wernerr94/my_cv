import styled from "styled-components";
import vars from "../../helpers/variables";
import { pxToRem } from "../../helpers/variables";

export const SectionTitle = styled.h2`
  font-family: ${vars.mainFont};
  font-size: ${vars.title};
  color: ${vars.white};
  text-align: center;
  margin: 0;
`;

export const Title = styled.h2`
  font-family: ${vars.mainFont};
  color: ${vars.orange};
`;

export const CoursesSection = styled.section`
  max-width: 1440px;
  padding: ${pxToRem(20)};
  background-color: ${vars.darkGreen};
  cursor: pointer;
  & img {
    display: block;
    margin: auto;
  }
  @media (min-width: 768px) {
    width: 70%;
    margin: auto;
    padding: ${pxToRem(20)} ${pxToRem(50)};
  }
  @media (min-width: 1024px) {
    width: ${pxToRem(600)};
    margin: auto;
  }
`;
export const CourseArticle = styled.article`
  position: relative;

  border-radius: ${pxToRem(30)};

  @media (min-width: 768px) {
  }
`;
export const CourseDescription = styled.p`
  font-family: ${vars.italicFont};
  font-size: ${vars.md};
  padding: ${pxToRem(10)};
  color: ${vars.white};
  /* @media (min-width: 1024px) {
    font-size: ${vars.md};
  } */
`;
export const ShowMoreButton = styled.div`
  background-color: transparent;
  color: ${vars.orange};
  font-family: ${vars.mainFont};
  border: ${pxToRem(1)} solid ${vars.orange};
  padding: ${pxToRem(10)};
  width: ${pxToRem(200)};
  text-align: center;
  @media (min-width: 1024px) {
    font-size: ${vars.sm};
    width: ${pxToRem(150)};
  }
`;

export const Link = styled.a`
  display: block;
  margin: auto;
  cursor: pointer;
`;
