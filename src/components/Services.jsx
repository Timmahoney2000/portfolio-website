/* eslint-disable no-unused-vars */
import React from "react";
import service1 from "../assets/service1.jpg";
import service2 from "../assets/service2.jpg";
import service3 from "../assets/service3.jpg";
import { FaArrowRight } from "react-icons/fa";

const Services = () => {
  return (
    <div className="bg-white py-16 pv-16">
      <div className="container mx-auto px-6 lg:px-24 text-center">
        <div className="mb-12">
          <h3 className="text-orange-500 font-semibold text-lg uppercase mb-2">
            Services
          </h3>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Check My Services
          </h2>
        </div>

        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-gray-50 rounded-lg shadow-lg p-6">
              <img
                src={service1}
                alt="service1"
                className="w-full h-48 object-cover rounded"
              />
              <h3 className="text-2xl text-orange-500 font-semiboldtext-color-gray-800 mb-2">
                Landing Page Design
              </h3>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptate, ducimus!
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg shadow-lg p-6">
              <img
                src={service2}
                alt="service2"
                className="w-full h-48 object-cover rounded"
              />
              <h3 className="text-2xl text-orange-500 font-semiboldtext-color-gray-800 mb-2">
                Branding
              </h3>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptate, ducimus!
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg shadow-lg p-6">
              <img
                src={service3}
                alt="service3"
                className="w-full h-48 object-cover rounded"
              />
              <h3 className="text-2xl text-orange-500 font-semiboldtext-color-gray-800 mb-2">
                Mobile App Design
              </h3>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptate, ducimus!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 text-right">
        <a className="flex items-center justify-end text-orange-500 font-semi-bold hover:text-orange-400">
          Explore All Services <FaArrowRight className="ml-2" />
        </a>
      </div>
    </div>
  );
};

export default Services;
