import styled from "styled-components";
import vars from "../../helpers/variables";
import { pxToRem } from "../../helpers/variables";
import { Field, Form } from "formik";

export const ContactSection = styled.section`
  max-width: 1024px;
  margin: ${pxToRem(10)};
  padding: ${pxToRem(10)};
  background-color: ${vars.darkGreen};
  @media (min-width: 768px) {
    & .contacts {
      display: flex;
      justify-content: space-around;
    }
  }
  @media (min-width: 1024px) {
    margin-inline: ${pxToRem(120)};
    justify-content: flex-end;
  }
  @media (min-width: 1440px) {
    margin: auto;
  }
`;
export const Title = styled.h2`
  font-family: ${vars.mainFont};
  font-size: ${vars.title};
  color: ${vars.white};
  text-align: center;
`;
export const InfoContainer = styled.div`
  @media (min-width: 768px) {
    margin-top: ${pxToRem(20)};
    display: flex;
    flex-direction: column;
  }
`;
export const ContactItem = styled.p`
  font-family: ${vars.mainFont};
  font-size: ${vars.md};
  color: ${vars.white};
  text-align: center;
  & span {
    margin-right: ${pxToRem(20)};
  }
`;
export const Link = styled.a`
  color: ${vars.orange};
  text-decoration: none;
  & img {
    display: block;
    width: ${pxToRem(30)};
    margin: ${pxToRem(40)} auto;
  }
`;

export const FormContainer = styled(Form)`
  padding: ${pxToRem(20)};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${pxToRem(20)};
`;
export const StyledField = styled(Field)`
  width: ${pxToRem(250)};
  height: ${pxToRem(30)};
  border: 0;
  border-bottom: ${pxToRem(1)} solid ${vars.white};
  background-color: ${vars.darkGreen};
  color: ${vars.orange};
  &::placeholder {
    font-family: ${vars.italicFont};
    color: ${vars.white};
    opacity: calc(0.5);
  }
  &:focus {
    outline: none;
    border: 0;
    border-bottom: ${pxToRem(1)} solid ${vars.orange};
    caret-color: ${vars.orange};
  }
`;
export const StyledTextArea = styled(Field)`
  resize: none;
  /* width: ${pxToRem(250)};
  min-height: ${pxToRem(200)}; */
  background-color: ${vars.darkGreen};
  outline: 0;
  border: 0;
  caret-color: ${vars.orange};
  color: ${vars.white};
  font-family: ${vars.italicFont};
  /* &:valid {
    border-bottom: ${pxToRem(1)} solid ${vars.orange};
    caret-color: ${vars.orange};
  } */
  &::placeholder {
    font-family: ${vars.italicFont};
    color: ${vars.white};
    opacity: calc(0.5);
  }
  &:focus {
    border: 0;
    outline: 0;
  }
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: ${pxToRem(2)};
  }
  &::-webkit-scrollbar-thumb {
    background: ${vars.orange};
    border-radius: 10px;
  }
`;
export const SubmitButton = styled.button`
  background-color: #fb8500;
  border-radius: 6px;
  border: 0;
  display: inline-block;
  width: ${pxToRem(200)};
  cursor: pointer;
  color: ${vars.darkGreen};
  font-family: ${vars.mainFont};
  font-size: ${vars.lg};
  padding: ${pxToRem(10)} ${pxToRem(20)};

  &:hover {
    background: linear-gradient(to bottom, #fb8500 5%, #fff 100%);
    background-color: #fb8500;
  }
  &:active {
    position: relative;
    top: 1px;
  }
`;
