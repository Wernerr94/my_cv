import React from "react";
import { Formik } from "formik";
import {
  ContactSection,
  Title,
  ContactItem,
  FormContainer,
  StyledField,
  StyledTextArea,
  SubmitButton,
} from "./Contact.styled";
import * as yup from "yup";

let schema = yup.object().shape({
  guestName: yup.string().required(),
  email: yup.string().email().required(),
  message: yup.mixed().required(),
});
const initialValues = {
  guestName: "",
  email: "",
  message: "",
};

export default function Contact() {
  function handleSubmit(values, actions) {
    console.log(values);
    console.log(actions);
  }
  return (
    <ContactSection id="contact">
      <Title>Contact</Title>
      <ContactItem>
        <span>email:</span>
        <a href="mailto:o.verner.work@gmail.com">o.verner.work@gmail.com</a>
      </ContactItem>
      <ContactItem>
        <span>tel.:</span>
        <a href="tel:+420-776-559-353">776-559-353</a>
        <a
          href="https://www.linkedin.com/in/oleksandr-verner-09612a23a/"
          target="blank"
        >
          <img
            src="/linkedin.png"
            alt="linkedin logo"
            style={{ width: "30px", display: "block", margin: "20px auto" }}
          />
        </a>
      </ContactItem>

      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <FormContainer>
          <label>
            <StyledField
              type="text"
              name="guestName"
              placeholder="Name"
              autoComplete="off"
            />
          </label>
          <label>
            <StyledField
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="off"
            />
          </label>
          <label>
            <StyledTextArea
              type="text"
              name="message"
              placeholder="Message..."
              component="textarea"
              rows="10"
              cols="35"
              autoComplete="off"
            />
          </label>

          <SubmitButton type="submit">Send</SubmitButton>
        </FormContainer>
      </Formik>
    </ContactSection>
  );
}
