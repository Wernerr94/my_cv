import React, { useRef } from "react";
import { LangList } from "./LanguageList.styled";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import useIntersection from "../../hooks/useIntersection";
import vars from "../../helpers/variables";

export default function LanguageList() {
  const en = useRef();
  const cz = useRef();
  const ua = useRef();
  const ru = useRef();
  const enEnter = useIntersection(en, "100px");
  const czEnter = useIntersection(cz, "100px");
  const uaEnter = useIntersection(ua, "100px");
  const ruEnter = useIntersection(ru, "100px");

  const styles = {
    path: {
      stroke: `${vars.orange}`,
      transition: "stroke-dashoffset 2s ease 0s",
    },
    // trail: {
    //   stroke: `${vars.deepGreen}`,
    // },
    text: {
      fill: `${vars.white}`,
      fontSize: `${vars.md}`,
      fontFamily: `${vars.mainFont}`,
    },
  };
  return (
    <LangList>
      <li ref={en}>
        <CircularProgressbar
          value={enEnter ? 50 : 0}
          text={"English"}
          styles={styles}
        />
      </li>
      <li ref={cz}>
        <CircularProgressbar
          value={czEnter ? 40 : 0}
          text={"Czech"}
          styles={styles}
        />
      </li>
      <li ref={ua}>
        <CircularProgressbar
          value={uaEnter ? 100 : 0}
          text={"Ukranian"}
          styles={styles}
        />
      </li>
      <li ref={ru}>
        <CircularProgressbar
          value={ruEnter ? 95 : 0}
          text={"Russian"}
          styles={styles}
        />
      </li>
    </LangList>
  );
}
