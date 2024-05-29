import React from 'react'
import Title from '../layouts/Title'
import ProjectCard from './ProjectCard'
import { projectOne, projectTwo, projectThree } from "../../assets/index";

export default function Projects() {
  return (
    <section id="projects" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
      <Title title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"/>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
      <ProjectCard
          title="Note App "
          des=" A versatile digital platform for capturing, organizing, and accessing notes seamlessly across devices.!"
          src={projectOne}
        />
        <ProjectCard
          title="E-commerce Website"
          des=" An online marketplace offering a wide range of products, conveniently accessible for browsing, purchasing, and delivery"
          src={projectTwo}
        />
        <ProjectCard
          title="Figma Design"
          des="Figma is a collaborative interface design tool that allows real-time collaboration between team members, 
          streamlining the process of creating and iterating on digital designs"
          src={projectThree}
        />
        <ProjectCard
          title="Admin Dashboard"
          des=" An intuitive interface providing administrators with comprehensive insights and controls for managing and 
          monitoring various aspects of a system or application"
          src={projectThree}
        />
        <ProjectCard
          title="To-Do List App"
          des=" A tool that helps to organize your day. 
          To-do list is a set of tasks that each render on a separate line with a clickable checkbox. 
          You can select or deselect the checkboxes to mark the tasks as complete or incomplete."
          src={projectOne}
        />
        <ProjectCard
          title="Chatting App"
          des=" An app that calculates Body Mass Index (BMI) based on user input, providing personalized health insights"
          src={projectTwo}
        />
      </div>
    </section>
  )
}
