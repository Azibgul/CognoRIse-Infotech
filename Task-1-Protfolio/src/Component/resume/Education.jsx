import React from "react";
import ResumeCard from "./ResumeCard";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row  gap-10 lgl:gap-20"
    >
      {/* Part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BS in Software Engineering"
            subTitle="Comsats University Islamabad (2019 - 2023)"
            result="3.5/4"
            des="COMSATS University Islamabad is a renowned institution of higher education in Pakistan, focusing on excellence in science and technology education and research."
          />
          <ResumeCard
            title="Intermediate of Science"
            subTitle="Hazara Public School and College (2017 - 2019)"
            result="850/1100"
            des="Hazara Public School and College in Haripur provides comprehensive education, fostering academic excellence and holistic development."
          />
          <ResumeCard
            title="Matriculation"
            subTitle="Working Folks Grammer School and College (2014 - 2016)"
            result="750/1100"
            des="Working Folks Grammar School and College in Haripur is committed to providing quality education with a focus on nurturing academic excellence and character development"
          />
        </div>
      </div>
       {/* Part two */}
      <div>
        <div>
          <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
          </div>
          <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
              title="Telephone Industries Of Pakistan"
              subTitle="Website Developer (01-Mar-2020 - 01-April-2020)"
              result="sucess"
              des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
            />
            <ResumeCard
              title="Future institute of Haripur"
              subTitle="Programing (2019 - 2020)"
              result="sucess"
              des="Higher Dploma is tertiary education leading to award of an academic certifacte. Higher education, also called post-secondary education."
            />
            <ResumeCard
              title="ELitx Limited"
              subTitle="Junior Developer"
              result="sucess"
              des="Elitx Private Limited: Pioneering innovation through cutting-edge technology solutions and personalized service."
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
