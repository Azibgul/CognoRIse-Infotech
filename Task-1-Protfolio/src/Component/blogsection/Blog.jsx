import React from 'react';
import Title from '../layouts/Title';
import BlogCard from './BlogCard';
import { projectFour, projectFive, projectSix } from "../../assets/index";

export default function Blog() {
  return (
    <section id="blog" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="VISIT MY BLOG AND KEEP YOUR FEEDBACK" des="Blog" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <BlogCard
          title="10 Essential JavaScript Concepts Every Developer Should Know"
          des="Learn about important JavaScript concepts like closures, hoisting, and scope to improve your coding skills."
          src={projectFour}
        />
        <BlogCard
          title="Introduction to React Hooks: A Beginner's Guide"
          des="Explore the basics of React Hooks and how they simplify state management and lifecycle methods in React applications."
          src={projectFive}
        />
        <BlogCard
          title="Building RESTful APIs with Node.js and Express"
          des="Discover how to create RESTful APIs using Node.js and Express, including routing, middleware, and error handling."
          src={projectSix}
        />
        <BlogCard
          title="Mastering CSS Flexbox: A Comprehensive Guide"
          des="Learn the ins and outs of CSS Flexbox layout model to create responsive and flexible web designs with ease."
          src={projectSix}
        />
        <BlogCard
          title="Debugging Tips and Tricks for JavaScript Developers"
          des="Explore effective debugging techniques and tools to troubleshoot JavaScript code and fix common errors efficiently."
          src={projectFive}
        />
        <BlogCard
          title="Getting Started with Python: A Beginner's Guide"
          des="Get introduced to Python programming language and its syntax, data types, control structures, and more for beginners."
          src={projectFour}
        />
      </div>
    </section>
  );
}
