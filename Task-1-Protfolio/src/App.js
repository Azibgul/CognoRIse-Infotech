import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import Banner from "./Component/banner/Banner";
import Features from "./Component/features/Features";
import Projects from "./Component/projects/Projects";
import Resume from "./Component/resume/Resume"
import Testimonial from "./Component/testimonial/Testimonial";
import Contact from "./Component/contact/Contact";
import Footer from "./Component/footer/Footer";
import FooterBottom from "./Component/footer/FooterBottom";
import Blog from "./Component/blogsection/Blog";

// import './App.css';

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
        <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <Features />
        <Projects />
        <Resume/>
        <Blog/>
        <Testimonial/>
        <Contact/>
        <Footer/>
        <FooterBottom/>
      </div>
    </div>
  );
}

export default App;
