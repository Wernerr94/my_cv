import React from "react";
import {
  Wrapper,
  ProjectsSection,
  Title,
  ProjectArticle,
  ProjectName,
  List,
  ListItem,
  Description,
} from "./Projects.styled";
import Contact from "../Contact/Contact";
import "../../i18n";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <ProjectsSection id="projects">
        <Title>Projects</Title>
        <ProjectArticle>
          <ProjectName>Munchkin Fallout</ProjectName>
          {/* do slider */}
          <List>
            <ListItem>
              <img src={require("../../img/1.png")} alt="screenshot" />
            </ListItem>
            <ListItem>
              <img src={require("../../img/2.png")} alt="screenshot" />
            </ListItem>
            <ListItem>
              <img src={require("../../img/3.png")} alt="screenshot" />
            </ListItem>
            <ListItem>
              <img src={require("../../img/4.png")} alt="screenshot" />
            </ListItem>
            {/* do screnshoot with card modal & mainUser Inventory */}
          </List>
          <Description>{t("munchkin")}</Description>
          <Description>{t("munchkinTech")}</Description>
        </ProjectArticle>
      </ProjectsSection>
      <Contact />
    </Wrapper>
  );
}
