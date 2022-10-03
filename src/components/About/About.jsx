import React from "react";
import { BoxContainer, ShortResumeButton, Description } from "./About.styled";
import "../../i18n";
import { useTranslation } from "react-i18next";
import { useSpring } from "react-spring";

export default function About() {
  const { t } = useTranslation();
  const styles = useSpring({ from: { opacity: 0 }, to: { opacity: 1 } });
  return (
    <BoxContainer id="about">
      <Description style={styles}>{t("about")}</Description>
      <ShortResumeButton>
        <span>{t("download")}</span>
      </ShortResumeButton>
    </BoxContainer>
  );
}
