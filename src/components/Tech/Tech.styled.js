import styled from "styled-components";
import { pxToRem } from "../../helpers/variables";
import { animated } from "@react-spring/web";
import techImg from "../../img/tech.png";
export const Wrapper = styled.div`
  background-image: linear-gradient(
      to top,
      rgba(82, 121, 111, 0.5),
      rgba(47, 62, 70, 0.5)
    ),
    url(${techImg});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding: ${pxToRem(60)} 0;
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
`;

export const TechContainer = styled(animated.div)`
  max-width: 1024px;
  margin-top: ${pxToRem(50)};
  margin-bottom: ${pxToRem(50)};

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
