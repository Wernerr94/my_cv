import { useRef } from "react";
import "./App.css";
// import Navigation from "./components/Navigation/Navigation";
// import Hello from "./components/Hello/Hello";
import About from "./components/About/About";
import Tech from "./components/Tech/Tech";
import Courses from "./components/Courses/Courses";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import { lazy } from "react";

const Navigation = lazy(() => import("./components/Navigation/Navigation"));
const Hello = lazy(() => import("./components/Hello/Hello"));
export default function App() {
  const scrollToElement = (el) =>
    el.current.scrollIntoView({ behavior: "smooth" });
  const about = useRef("about");
  return (
    <div>
      <Navigation scrollToElement={scrollToElement} about={about} />
      <Hello />
      <About about={about} />
      <Tech />
      <Courses />
      <Projects />
      <Contact />
    </div>
  );
}
