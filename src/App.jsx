import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume"
import "./styles.css/App.css";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <About />
        <Resume />
        <Projects />
        <Skills />
        <Footer />
      </main>
    </div>
  );
}