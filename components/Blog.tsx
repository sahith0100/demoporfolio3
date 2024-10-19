import React from "react";
import BlogCard from "./Helper/BlogCard";

const Blog = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-black ">
      <div className="text-center">
        <p className="heading__mini">My Blog</p>
        <h1 className="heading__primary">
          My Latest <span className="text-yellow-300">Blog</span> and news
        </h1>
      </div>
      <div className="w-[80%] mx-auto pt-[3rem] md:pt-[5rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-[2rem]">
        <div data-aos="zoom-in" data-aos-anchor-placement="top-bottom">
          <BlogCard
            title="Fullstack Developer Roadmap"
            comment="4"
            date="24 January 2024"
            image="/images/b1.jpg"
          />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="100"
        >
          <BlogCard
            title="Starting With React Js"
            comment="8"
            date="26 January 2024"
            image="/images/b2.jpg"
          />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="400"
        >
          <BlogCard
            title="Time Management In Tech Job"
            comment="4"
            date="29 January 2024"
            image="/images/b3.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
