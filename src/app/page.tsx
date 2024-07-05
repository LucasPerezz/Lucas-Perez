"use client";
import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import HomePage from "@/components/HomePage";
import Loader from "@/components/Loader";
import Skills from "@/components/Skills";
import Header from "@/components/Header";
import { useState } from "react";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

export default function Home() {
  const [loading, setLoading] = useState(false);

  // window.addEventListener("load", () => {
  //   setTimeout(() => {
  //     setLoading(!loading);
  //   }, 1250)
  // });


  return (
    <main className="bg-neutral-950 flex flex-col gap-10">
      {loading ? (
        <Loader />
      ) : (
        <>
          {/* <Header /> */}
          <HomePage />
          <AboutMe />
          <Experience />
          <Education />
          <Projects />
          <Skills />
          <Footer />
        </>
      )}
    </main>
  );
}
