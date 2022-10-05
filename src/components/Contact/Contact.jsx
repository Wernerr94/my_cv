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
import { send } from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
const SERVICE_ID = "service_3ke2fqo";
const TEMPLATE_ID = "template_ia40dn3";
const USER_ID = "9qev8GJq6bZKoM8kt";

export default function Contact() {
  const { t } = useTranslation();

  async function handleSubmit(values, { resetForm }) {
    await toast.promise(send(SERVICE_ID, TEMPLATE_ID, values, USER_ID), {
      pending: "Sending...",
      success: "Email was sent",
      error: "Try again please",
    });
    resetForm();
  }

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
          </ContactItem>
          <ContactItem>
            <Link
              href="https://www.linkedin.com/in/oleksandr-verner-09612a23a/"
              target="blank"
            >
              <img
                src={require("../../img/linkedin.png")}
                alt="linkedin logo"
                style={{ marginRight: "20px" }}
              />
            </Link>
            <Link href="https://github.com/Wernerr94" target="blank">
              <img
                src={require("../../img/github.png")}
                alt="github logo"
                style={{ scale: "calc(1.1)" }}
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
      <ToastContainer autoClose={1000} hideProgressBar />
    </ContactSection>
  );
}
