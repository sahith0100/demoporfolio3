import React from "react";
import ServiceCard from "./Helper/ServiceCard";

const Services = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-[#0b0c13] ">
      <div className="text-center">
        <p className="heading__mini">Popular Services</p>
        <h1 className="heading__primary">
          My Special <span className="text-yellow-300">Services</span> For You
        </h1>
      </div>
      <div className="pt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center">
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
          <ServiceCard title="React Website" num="01" />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <ServiceCard title="Next JS Website" num="02" />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="400"
        >
          <ServiceCard title="Fullstack Website" num="03" />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="600"
        >
          <ServiceCard title="Node JS Api" num="04" />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="800"
        >
          <ServiceCard title="MERN WebApp" num="05" />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="1000"
        >
          <ServiceCard title="Bug Fixing" num="06" />
        </div>
      </div>
    </div>
  );
};

export default Services;
