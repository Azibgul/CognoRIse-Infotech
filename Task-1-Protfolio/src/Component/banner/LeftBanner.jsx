// import React from 'react'
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";


export default function LeftBanner() {
     const [text] = useTypewriter({
    words: ["Professional Coder.", "FrontEnd Web Developer.", "Figma Design"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
        <div className="flex flex-col gap-3">
          <h4 className="text-lg font-normal">Welcome to My World</h4>
          <h1 className="text-6xl font-bold text-white">
            Hi, I'm
            <span className="text-designColor capitalize">Azib Gul</span>
          </h1>
          <h2 className="text-4xl font-bold text-white">
            a <span>{text} </span>
            <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
          </h2>
          <p className="text-base font-bodyFont leading-6 tracking-wide">
            I an innovative Experienced Frontend web Developer with a strong
            command of HTML, CSS, and JavaScript, ReactJS. Adept at creating
            UI / UX designs and skilled in ReactJS , Bootstrap. Proven track
            record of success in delivering projects and poised to transition
            into a Web Developer role. Passionate about leveraging technical
            expertise to achieve future goals in frontend web development.
          </p>
        </div>
        <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
            <span className="bannerIcon">
              <FaTwitter />
            </span>
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
        </div>
      </div>
      </div>
  )
}
