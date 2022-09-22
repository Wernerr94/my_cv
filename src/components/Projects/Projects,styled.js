import styled from "styled-components";
import vars from "../../helpers/variables";
import { pxToRem } from "../../helpers/variables";

export const ProjectsSection = styled.section`
  max-width: 1440px;
  margin: ${pxToRem(20)};
  margin: auto;
  @media (min-width: 1024px) {
    padding: 0 ${pxToRem(100)};
  }
`;
export const Title = styled.h2`
  font-family: ${vars.mainFont};
  font-size: ${vars.title};
  color: ${vars.white};
  text-align: center;
  margin: 0;
`;

export const ProjectArticle = styled.article`
  padding: ${pxToRem(10)};
`;

export const ProjectName = styled.h3`
  font-family: ${vars.mainFont};
  color: ${vars.orange};
  font-size: ${vars.xl};
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`;
export const ListItem = styled.li`
  width: ${pxToRem(300)};
  margin-bottom: ${pxToRem(20)};
  @media (min-width: 768px) {
    width: ${pxToRem(350)};
    &:hover {
      scale: calc(1.05);
      transition: 0.3s;
    }
  }
  & img {
    width: 100%;
  }
`;
export const Description = styled.p`
  font-family: ${vars.italicFont};
  padding: ${pxToRem(40)};
  color: ${vars.white};
  font-size: ${vars.md};
  text-shadow: 1px 1px 20px #000;
  @media (min-width: 500px) {
    font-size: ${vars.lg};
  }
`;
