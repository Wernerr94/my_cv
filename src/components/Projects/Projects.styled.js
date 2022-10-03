import styled from "styled-components";
import vars from "../../helpers/variables";
import { pxToRem } from "../../helpers/variables";
import puzzlesImg from "../../img/puzzle.png";
import { animated } from "react-spring";

export const Wrapper = styled.div`
  background-image: linear-gradient(
      to top,
      rgba(82, 121, 111, 0.5),
      rgba(47, 62, 70, 0.5)
    ),
    url(${puzzlesImg});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding-top: ${pxToRem(60)};
  @media (max-width: 500px) {
    background-position: -60%;
  }
  @media (max-width: 767px) {
    background-position: top ${pxToRem(200)};
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    background-position: -85% 0;
  }
`;
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
  text-shadow: ${pxToRem(1)} ${pxToRem(1)} ${pxToRem(5)} #000;
`;

export const ProjectArticle = styled.article`
  padding: ${pxToRem(10)};
`;

export const ProjectName = styled.h3`
  font-family: ${vars.mainFont};
  color: ${vars.orange};
  font-size: ${vars.xl};
  text-shadow: ${pxToRem(1)} ${pxToRem(1)} ${pxToRem(5)} #000;
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  @media (min-width: 500px) {
    display: none;
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
  max-width: 700px;
  font-family: ${vars.italicFont};
  padding: ${pxToRem(40)};
  color: ${vars.white};
  font-size: ${vars.md};
  text-shadow: 1px 1px 20px #000;
  margin: auto;
  @media (min-width: 500px) {
    font-size: ${vars.lg};
  }
`;

export const SliderContainer = styled.div`
  max-width: 1024px;
  margin: ${pxToRem(10)};
  position: relative;
  @media (max-width: 767px) {
    display: none;
  }
`;
export const SliderView = styled(animated.div)`
  max-width: 900px;
  margin: auto;
  & img {
    width: 100%;
  }
`;
export const ControlLeft = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: ${pxToRem(50)};
  height: ${pxToRem(100)};
  font-size: ${vars.title};
  color: ${vars.white};
  @media (max-width: 1024px) {
    top: 110%;
    left: 40%;
  }
  &:hover {
    color: ${vars.orange};
    transition: 0.5s;
  }
`;
export const ControlRight = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  width: ${pxToRem(50)};
  height: ${pxToRem(100)};
  font-size: ${vars.title};
  color: ${vars.white};
  @media (max-width: 1024px) {
    top: 110%;
    right: 40%;
  }
  &:hover {
    color: ${vars.orange};
    transition: 0.5s;
  }
`;
