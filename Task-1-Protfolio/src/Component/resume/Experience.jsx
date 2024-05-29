import React from "react";
import ResumeCard from "./ResumeCard";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row  gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Telephone Industries of Pakistan "
            subTitle="Website Developer (01-Mar-2020 - 01-April-2020)"
            result="sucess"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
            />
          <ResumeCard
            title="Elitx Private Limited "
            subTitle="FrontEnd Web Developer - ( 05-May-2023 - Present)"
            result="sucess"
            des="Elitx Private Limited: Pioneering innovation through cutting-edge technology solutions and personalized service."
          />
          <ResumeCard
            title="Diploma Information of Technology"
            subTitle="Programming - (2019 - 2020)"
            result="sucess"
            des="Diploma in Information Technology: Equips students with essential skills in computer systems, software development, and network management."/>
        </div>
      </div>
      <div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title=" Gym trainer"
            subTitle="Rainbow Gym Center (2015 - 2020)"
            result="sucess"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Web Developer Instructor"
            subTitle="SuperKing College (2010 - 2014)"
            result="sucess"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="School Teacher"
            subTitle="Kingstar Secondary School (2-Month)"
            result="sucess"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      </div>
    </motion.div>
  );
};

export default Experience;
