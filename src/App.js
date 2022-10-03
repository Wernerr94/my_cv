import { useState, useEffect } from "react";
import { useSpring } from "@react-spring/web";

import Projects from "./components/Projects/Projects";
import Hello from "./components/Hello/Hello";
import Navigation from "./components/Navigation/Navigation";
import Tech from "./components/Tech/Tech";
import "./App.css";
import { ToTopButton } from "./layout.styled";

export default function App() {
  const [showButton, setShowButton] = useState(false);

  const props = useSpring({
    from: { rotate: "0" },
    to: { rotate: "360deg" },
    loop: { reverse: true },
    delay: 5000,
    config: {
      frequency: 1,
      damping: 0.6,
    },
  });

  useEffect(() => {
    function handleButtonShow() {
      if (window.pageYOffset > 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }
    window.addEventListener("scroll", handleButtonShow);
    return () => {
      window.removeEventListener("scroll", handleButtonShow);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Navigation />
      <Hello />
      <Tech />
      <Projects />
      {showButton && (
        <ToTopButton style={props} onClick={scrollToTop}>
          <span>&#8593;</span>
        </ToTopButton>
      )}
    </>
  );
}
