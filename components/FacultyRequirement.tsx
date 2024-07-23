"use client";
import React from "react";
import { Fade, JackInTheBox, Zoom,Flip,Slide } from "react-awesome-reveal";
const FacultyCard: React.FC<{ title: string }> = ({ title }) => (
  <div className="hover:-translate-y-4 transition-all duration-500 flex items-center border-4 border-dashed border-red-500 rounded-2xl h-96 w-72 mb-6">
    <h2 className="text-lg font-bold text-gray-800 text-center p-4">{title}</h2>
  </div>
);

const FacultyRequirement: React.FC = () => {
  const titles = [
    "M.Pharm. Pharmaceutics with 5 to 10 years experience (Ph.D awarded from Universities of Both Telugu states candidates are preferred)",
    "M.Pharm. Pharmacognosy with 0 to 10 years experience.",
    "M.Pharm. Pharmacy with 0 to 10 years experience.",
    "M.Pharm. Pharmaceutical with 0 to 10 years experience.",
  ];

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 py-24">
      {/* Container */}

      <div className="flex flex-col items-center rounded-xl px-6 bg-white">
        {/* Heading */}
        <div className="text-center mb-6">
          <h2 className="text-2xl mt-6 lg:text-4xl font-semibold text-[#006401]">
            Faculty Requirement
          </h2>
          {/* Divider */}
          <div className="h-0.5 bg-gradient-to-r from-red-500 to-teal-900 my-6"></div>
        </div>

        {/* Content Section */}

        <div className="flex flex-wrap justify-center items-center lg:space-x-8 gap-y-8">
          {titles.map((title, index) => (
            <Zoom key={index}>
              <FacultyCard  title={title} />
            </Zoom>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-12">
        <JackInTheBox>
          <CurriculumSection />
        </JackInTheBox>

        <Eamcet />
      </div>
      <StudentClub />

      <div className="flex flex-wrap gap-12 ">
        <ContactForm />
        <MapEmbed />
      </div>
    </div>
  );
};

const CurriculumSection: React.FC = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="bg-white mt-12 w-[345px]   lg:w-[625px]  p-6 rounded-xl shadow-xl space-y-6 duration-300 hover:-translate-y-3">
          <div className="relative text-center   text-xl font-semibold mb-12">
            <h2 className=" ">
              CURRICULUM
              <div className="relative bottom-[-12px] w-36  mx-auto h-[2px] bg-gradient-to-r from-red-500 to-green-500" />
            </h2>
          </div>

          {["M Pharmacy", "M Pharmacy", "M Pharmacy"].map((item, index) => (
            <div
              key={index}
              className="border-2 border-red-500 rounded-lg p-4 flex items-center justify-between"
            >
              <div className="flex items-center">
                <img
                  src="https://img.icons8.com/color/48/000000/checked-checkbox.png"
                  alt="Checked"
                  className="w-6 h-6 mr-2"
                />
                <span>{item}</span>
              </div>
              <button className="bg-green-500 text-white border-none rounded px-4 py-2 cursor-pointer">
                More
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const Eamcet: React.FC = () => {
  return (
    <>
      <JackInTheBox>
        <div className="p-6 lg:mt-12 px-6 bg-white rounded-xl lg:w-[625px] w-[345px] shadow-lg duration-300 hover:-translate-y-3">
          {/* Title Section */}
          <h2 className="text-center text-2xl font-semibold mb-2 text-green-800">
            EAMCET CODE: HIPS
          </h2>

          {/* Divider */}
          <div className="flex justify-center my-6">
            <div className="w-1/5 h-0.5 bg-gradient-to-r from-red-500 to-green-800" />
          </div>

          {/* Courses List */}
          <div className="mb-6 lg:px-12 px-4">
            <h3 className="text-xl font-semibold mb-2 text-black">Courses:</h3>
            <ul className="list-none space-y-2">
              {[
                "B.Pharm Intake: 60",
                "Pharm.D Intake: 30",
                "M.Pharm Pharmaceutics: 15",
                "Pharmaceutical Analysis: 15",
              ].map((course, index) => (
                <li key={index} className="flex items-start  relative">
                  <span className=" left-0 text-red-500 text-xl">
                    <img
                      src="https://img.icons8.com/color/48/000000/checked-checkbox.png"
                      alt="Checked"
                      className="w-6 h-6 mr-2"
                    />
                  </span>
                  {course}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="px-4 lg:px-12">
            <h3 className="text-xl font-semibold mb-2 text-black ">
              For Admissions Contact:
            </h3>
            <ul className="list-none space-y-2">
              {["9440154950", "8639162027"].map((contact, index) => (
                <li key={index} className="flex items-start  relative">
                  <span className=" left-0 text-red-500 text-xl">
                    <img
                      src="https://img.icons8.com/color/48/000000/checked-checkbox.png"
                      alt="Checked"
                      className="w-6 h-6 mr-2"
                    />
                  </span>
                  <a href={`tel:${contact}`}>{contact}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </JackInTheBox>
    </>
  );
};

const StudentClub: React.FC = () => {
  return (
    <div className="bg-gray-100">
      <div className="p-6 overflow-hidden bg-white mt-16 lg:mx-24 rounded-xl lg:px-12">
        {/* Heading Section */}
        <div className="relative mb-12">
          <h2 className="text-center text-2xl lg:mt-6 font-bold text-gray-800">
            Student Club
          </h2>
          <div
            className=" bottom-[-28px]  mx-auto w-1/4 h-[2px] bg-gradient-to-r from-red-500 to-green-800"
            style={{ transform: "" }}
          />
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 ">
          {[
            "https://www.hip.ac.in/wp-content/uploads/2024/07/Alumini-CLub.png",
            "https://www.hip.ac.in/wp-content/uploads/2024/07/Visual-Voyagers.png",
            "https://www.hip.ac.in/wp-content/uploads/2024/07/Bliss-and-Bounty.jpg",
            "https://www.hip.ac.in/wp-content/uploads/2024/07/Green-with-Gusto.jpg",
            "https://www.hip.ac.in/wp-content/uploads/2024/07/Sonic-Speeders.png",
            "https://www.hip.ac.in/wp-content/uploads/2024/07/Helping-HIve.png",
          ].map((src, index) => (
            <Slide key={index}> 
            <div  className="hover:-translate-y-3 duration-500 p-2">
              <img
                src={src}
                alt={`Student Club Image ${index + 1}`}
                className="w-full h-auto rounded-lg shadow-lg"
                loading="lazy"
                decoding="async"
              />
            </div>
            </Slide>
          ))}
        </div>
      </div>
    </div>
  );
};

const ContactForm: React.FC = () => {
  return (
    <div className="bg-gray-100 p-6 mt-16">
      {/* Heading Section */}
      <div className="relative mb-16">
        <h3 className="text-center text-xl font-semibold text-gray-800">
          Hetero Institute of Pharmaceutical Sciences
        </h3>
        <div className="absolute bottom-[-20px] left-[30%] w-[40%] h-[2px] bg-gradient-to-r from-red-500 to-green-800" />
      </div>

      {/* Contact Form Section */}
      <div className="fluentform-widget-wrapper">
        <form id="fluentform_1" className="frm-fluent-form" method="POST">
          <fieldset className="bg-transparent border-none p-0">
            <legend className="sr-only">Contact Form Demo</legend>

            {/* First Name and Last Name */}
            <div className="flex flex-wrap mb-4">
              <div className="w-full sm:w-1/2  mb-4 sm:mb-0">
                <label
                  htmlFor="ff_1_names_first_name_"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="names[first_name]"
                  id="ff_1_names_first_name_"
                  className="mt-1 block w-full p-2 border-gray-300 rounded-md"
                  placeholder="First Name"
                />
              </div>
              <div className="w-full sm:w-1/2 lg:px-2">
                <label
                  htmlFor="ff_1_names_last_name_"
                  className="block text-sm font-medium text-gray-700 "
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="names[last_name]"
                  id="ff_1_names_last_name_"
                  className="mt-1 block w-full  border-gray-300 rounded-md shadow-sm p-2"
                  placeholder="Last Name"
                />
              </div>
            </div>

            {/* Email */}
            <div className="mb-4">
              <label
                htmlFor="ff_1_email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="ff_1_email"
                className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm "
                placeholder="Email Address"
                required
              />
            </div>

            {/* Subject */}
            <div className="mb-4">
              <label
                htmlFor="ff_1_subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="ff_1_subject"
                className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm "
                placeholder="Subject"
              />
            </div>

            {/* Message */}
            <div className="mb-4">
              <label
                htmlFor="ff_1_message"
                className="block text-sm font-medium text-gray-700"
              >
                Your Message
              </label>
              <textarea
                name="message"
                id="ff_1_message"
                className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm "
                placeholder="Your Message"
                rows={4}
                required
              />
            </div>

            {/* Submit Button */}
            <div className="text-left">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Submit
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

const MapEmbed: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-12 justify-center mt-24">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1928.042546339741!2d80.899445!3d17.198402!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3685005d152329%3A0xbad7c2964327ba77!2sHETERO%20INSTITUTE%20OF%20PHARMACEUTICAL%20SCIENCES!5e1!3m2!1sen!2sin!4v1721682108455!5m2!1sen!2sin"
        width="350"
        height={450}
        className="border-0 rounded-xl lg:w-[650px] lg:h-[450px] "
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default FacultyRequirement;
