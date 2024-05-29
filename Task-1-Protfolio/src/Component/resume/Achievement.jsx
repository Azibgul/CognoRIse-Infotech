import React from "react";
import ResumeCard from "./ResumeCard";
import { motion } from "framer-motion";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row  gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Company Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="ElizTech Company"
            subTitle="Software Testing"
            result="Success"
            des="Redefining excellence in technology with innovative solutions and client-centric services."
          />
          <ResumeCard
            title="TIP Factory"
            subTitle="Solar System"
            result="Success"
            des="The training provided by universities in order to 
            prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="DIT Office"
            subTitle="Markiting"
            result="Success"
            des="Driving digital transformation through strategic planning and innovative solutions"
          />
        </div>
      </div>
      <div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Achivement Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Software Engineer"
            subTitle="Eliztech Pvt. Ltd."
            result="Successfully Projects"
            des="Led the development of innovative software solutions, resulting in increased client satisfaction and company revenue."
        />
        <ResumeCard
            title="Systems Analyst"
            subTitle="Eliztech Pvt. Ltd."
            result="Streamlined Operations"
            des="Optimized system processes, reducing operational costs and enhancing overall efficiency."
        />
        <ResumeCard
            title="Network Administrator"
            subTitle="Eliztech Pvt. Ltd."
            result="Network Security"
            des="Implemented robust security protocols, safeguarding company data and infrastructure from cyber threats."
        />
        </div>
      </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
