import React from "react";
import { Formik } from "formik";
import {
  ContactSection,
  Title,
  InfoContainer,
  ContactItem,
  Link,
  FormContainer,
  StyledField,
  StyledTextArea,
  SubmitButton,
} from "./Contact.styled";
import * as yup from "yup";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  function handleSubmit(values, actions) {}
  return (
    <ContactSection id="contact">
      <Title>{t("contact")}</Title>
      <div className="contacts">
        <InfoContainer>
          <ContactItem>
            <span>email:</span>
            <Link href="mailto:o.verner.work@gmail.com">
              o.verner.work@gmail.com
            </Link>
          </ContactItem>
          <ContactItem>
            <span>tel.:</span>
            <Link href="tel:+420-776-559-353">776-559-353</Link>
            <Link
              href="https://www.linkedin.com/in/oleksandr-verner-09612a23a/"
              target="blank"
            >
              <img
                src={require("../../img/linkedin.png")}
                alt="linkedin logo"
              />
            </Link>
          </ContactItem>
        </InfoContainer>

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
                placeholder={t("name")}
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
                placeholder={t("message")}
                component="textarea"
                rows="5"
                cols="35"
                autoComplete="off"
              />
            </label>

            <SubmitButton type="submit">{t("send")}</SubmitButton>
          </FormContainer>
        </Formik>
      </div>
    </ContactSection>
  );
}
