import React, { useState, useEffect } from "react";
import {
  Wrapper,
  ProjectsSection,
  Title,
  ProjectArticle,
  ProjectName,
  List,
  ListItem,
  Description,
  SliderContainer,
  SliderView,
  ControlLeft,
  ControlRight,
} from "./Projects.styled";
import Contact from "../Contact/Contact";
import "../../i18n";
import { useTranslation } from "react-i18next";
import { HiChevronLeft } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi";

export default function Projects() {
  const IMAGES = [
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png",
    "6.png",
    "7.png",
    "8.png",
    "otherPlayerButtons.gif",
    "radiation.gif",
    "inventory.gif",
  ];
  const [index, setIndex] = useState(0);
  const { t } = useTranslation();

  function handlePrevImage() {
    if (index === 0) {
      setIndex(IMAGES.length - 1);
    } else {
      setIndex(index - 1);
    }
  }
  function handleNextImage() {
    if (index !== IMAGES.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }
  useEffect(() => {
    let i = setInterval(() => {
      if (index !== IMAGES.length - 1) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    }, 5000);
    return () => {
      clearInterval(i);
    };
  }, [index, IMAGES.length]);

  return (
    <Wrapper>
      <ProjectsSection id="projects">
        <Title>{t("projects")}</Title>
        <ProjectArticle>
          <ProjectName>Munchkin Fallout</ProjectName>
          {/* do screnshoot with card modal & mainUser Inventory */}

          <SliderContainer>
            <ControlLeft onClick={handlePrevImage}>
              <HiChevronLeft />
            </ControlLeft>
            <SliderView>
              <img
                src={require(`../../img/${IMAGES[index]}`)}
                alt="screenshot"
              />
            </SliderView>
            <ControlRight onClick={handleNextImage}>
              <HiChevronRight />
            </ControlRight>
          </SliderContainer>
          <List>
            {IMAGES.map((img) => (
              <ListItem key={img}>
                <img src={require(`../../img/${img}`)} alt="screenshot" />
              </ListItem>
            ))}
          </List>
          <Description>{t("munchkin")}</Description>
          <Description>{t("munchkinTech")}</Description>
        </ProjectArticle>
      </ProjectsSection>
      <Contact />
    </Wrapper>
  );
}
