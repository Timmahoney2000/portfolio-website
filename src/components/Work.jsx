/* eslint-disable no-unused-vars */
import React from "react";
import work1 from "../assets/work1.jpg";
import work2 from "../assets/work2.png";
import work3 from "../assets/work3.jpg";

const Work = () => {
  const caseStudies = [
    {
      id: 1,
      title: "First Title",
      description: "Description 1",
      workImage: work1,
    },
    {
      id: 2,
      title: "Second Title",
      description: "Description 2",
      workImage: work2,
    },
    {
      id: 3,
      title: "Third Title",
      description: "Description 3",
      workImage: work3,
    },
  ];

  return (
    <div className="container mx-auto p4 py-12">
      <h3 className="text-lg text-orange-500 font-semibold text-center uppercase mb-2">
        Work
      </h3>
      <h2 className="text-4xl text-black font-bold text-center mb-12">
        My Case Studies
      </h2>
      {caseStudies.map((study, index) => (
        <div
          key={study.id}
          className={`flex flex-col lg:flex-row text-black items-center justify-between mb-16 lg:mb-24 ${
            index % 2 === 0 ? "lg:flex-row-reverse" : ""
          }`}
        >
          <div className="w-full lg:w-1/3">
            <img
              src={study.workImage}
              className="w-full h-full object-coverrounded-lg shadow-lg"
            />
          </div>
          <div className="w-full lg:w-1/2 p-4">
            <div className="flex items-center mb-4">
              <span className="text-3xl font-bold text-orange-500 mr-2">{`0${
                index + 1
              }`}</span>
              <h3 className="text-2xl font-semibold">{study.title}</h3>
            </div>
            <p className="text-gray-600 mb-4">{study.description}</p>
            <button className="border-2 border-orange-500 text-orange-500 px-4 py-2 rounded-full hover:bg-orange-500 hover:text-white">
              Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Work;
