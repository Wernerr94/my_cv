import React, { useState } from "react";
import {
  Title,
  CoursesSection,
  CourseArticle,
  CourseDescription,
  Link,
} from "./Courses.styled";
import "../../i18n";
import { useTranslation } from "react-i18next";

export default function Courses() {
  const [openHTML, setOpenHTML] = useState(false);
  const [openJS, setOpenJS] = useState(false);
  const [openReact, setOpenReact] = useState(false);
  const { t } = useTranslation();
  return (
    <CoursesSection id="education">
      <CourseArticle>
        <Title>HTML&CSS</Title>
        <CourseDescription>{t("html")}</CourseDescription>
        {openHTML && (
          <ul>
            <li>
              <CourseDescription>{t("html1")}</CourseDescription>
            </li>
            <li>
              <CourseDescription>{t("html2")}</CourseDescription>
            </li>
            <li>
              <CourseDescription>{t("html3")}</CourseDescription>
            </li>
            <li>
              <CourseDescription>{t("html4")}</CourseDescription>
            </li>
            <li>
              <CourseDescription>{t("html5")}</CourseDescription>
            </li>
            <li>
              <CourseDescription>{t("html6")}</CourseDescription>
            </li>
            <li>
              <CourseDescription>{t("html7")}</CourseDescription>
            </li>
            <li>
              <CourseDescription>{t("html8")}</CourseDescription>
            </li>
            <li>
              <CourseDescription>{t("html9")}</CourseDescription>
            </li>
            <li>
              <CourseDescription>{t("html10")}</CourseDescription>
            </li>
            <li>
              <CourseDescription>{t("html11")}</CourseDescription>
            </li>
          </ul>
        )}
        <button onClick={() => setOpenHTML(!openHTML)}>
          {openHTML ? "close topics" : "view all course topics"}
        </button>
      </CourseArticle>
      <CourseArticle>
        <Title>JavaSript</Title>
        <CourseDescription>{t("js")}</CourseDescription>
        {openJS && (
          <ul>
            <li>
              <CourseDescription>{t("js1")}</CourseDescription>
            </li>
            <li>
              <CourseDescription>{t("js2")}</CourseDescription>
            </li>
            <li>
              <CourseDescription>{t("js3")}</CourseDescription>
            </li>
            <li>
              <CourseDescription>{t("js4")}</CourseDescription>
            </li>
            <li>
              <CourseDescription>{t("js5")}</CourseDescription>
            </li>
            <li>
              <CourseDescription>{t("js6")}</CourseDescription>
            </li>
            <li>
              <CourseDescription>{t("js7")}</CourseDescription>
            </li>
            <li>
              <CourseDescription>{t("js8")}</CourseDescription>
            </li>
            <li>
              <CourseDescription>{t("js9")}</CourseDescription>
            </li>
            <li>
              <CourseDescription>{t("js10")}</CourseDescription>
            </li>
            <li>
              <CourseDescription>{t("js11")}</CourseDescription>
            </li>
            <li>
              <CourseDescription>{t("js12")}</CourseDescription>
            </li>
          </ul>
        )}
        <button onClick={() => setOpenJS(!openJS)}>
          {openJS ? "close topics" : "view all course topics"}
        </button>
      </CourseArticle>
      <CourseArticle>
        <Title>React.js&Redux </Title>
        <CourseDescription>{t("react")}</CourseDescription>
        <button onClick={() => setOpenReact(!openReact)}>
          {openReact ? "close topics" : "view all course topics"}
        </button>
      </CourseArticle>
      <Link href="https://goit.ua/" target="_blank">
        <img
          src={require("../../img/goIT.png")}
          alt="GoIT logo"
          style={{ width: "100px" }}
        />
      </Link>
    </CoursesSection>
  );
}
