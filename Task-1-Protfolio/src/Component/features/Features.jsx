import React from 'react'
import Title from '../layouts/Title'
import Card from './Card'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe} from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";

const Features = () => {
  return (
    <section  id="features" className='w-full  py-20  border-b-[1px] border-b-black'>
      <Title title="Features" des="What I Do" />
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20'>
        <Card title="Business Stratagy" des="Crafting a sustainable plan to achieve long-term success and competitive advantage in the marketplace"/>
        <Card 
        title= "App Development"
        des= "Designing and building intuitive digital solutions to meet user needs and enhance experiences"
        icon={<AiFillAppstore/>}/>
         <Card 
        title= "SEO Optimisation"
        des= "Maximizing online visibility and traffic through strategic keyword targeting and website optimization techniques"
        icon={<SiProgress/>}/> <Card 
        title= "Mobile Development"
        des= "Creating innovative and user-friendly applications for smartphones and tablets across diverse platforms"
        icon={<FaMobile/>}/> <Card 
        title= "UX Design"
        des= "Crafting intuitive and delightful user experiences through research, empathy, and iterative design processes."
        icon={<SiAntdesign/>}/> <Card 
        title= "Hosting Websites"
        des= "Providing reliable and secure digital infrastructure to ensure seamless access and performance for websites."
        icon={<FaGlobe/>}/>
      </div>
    </section>
  )
}

export default Features
