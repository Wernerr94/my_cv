import styled from "styled-components";
import { pxToRem } from "../../helpers/variables";

export const LangList = styled.ul`
  max-width: 1024px;
  margin: auto;
  margin-bottom: ${pxToRem(50)};
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 1024px) {
    width: ${pxToRem(650)};
  }
  & li {
    margin: auto;
    padding: ${pxToRem(10)};
    width: ${pxToRem(150)};
    @media (min-width: 1024px) {
      width: ${pxToRem(120)};
    }
  }
`;
