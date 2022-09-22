import React from "react";
import {
  Title,
  CoursesSection,
  CourseArticle,
  CourseDescription,
  Link,
} from "./Courses.styled";
import ScrollAnimation from "react-animate-on-scroll";

export default function Courses() {
  return (
    <ScrollAnimation animateIn="backInUp" duration={2}>
      <CoursesSection id="education">
        <CourseArticle>
          <Title>HTML&CSS</Title>
          <CourseDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            consectetur tempora modi impedit quos aliquam quod vitae. Enim dolor
            magni ducimus similique facilis voluptatum veniam dicta excepturi,
            itaque porro. Tempora.
          </CourseDescription>
        </CourseArticle>
        <CourseArticle>
          <Title>JavaSript</Title>
          <CourseDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            consectetur tempora modi impedit quos aliquam quod vitae. Enim dolor
            magni ducimus similique facilis voluptatum veniam dicta excepturi,
            itaque porro. Tempora.
          </CourseDescription>
        </CourseArticle>
        <CourseArticle>
          <Title>React.js&Redux </Title>
          <CourseDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            consectetur tempora modi impedit quos aliquam quod vitae. Enim dolor
            magni ducimus similique facilis voluptatum veniam dicta excepturi,
            itaque porro. Tempora.
          </CourseDescription>
        </CourseArticle>
        <Link href="goit.com">
          <img src="/goIT.png" alt="GoIT logo" style={{ width: "100px" }} />
        </Link>
      </CoursesSection>
    </ScrollAnimation>
  );
}
