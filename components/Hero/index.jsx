import React from "react";
import Image from "next/image";
function Hero() {
  return (
    <>
      <div className="bg-white px-4 mb-6">
        <div className="hero__content flex flex-wrap gap-x-24  justify-center">
          <div className="lg:w-[600px]  lg:h-[600px]  mt-12   flex items-center justify-center ">
            <Image src="/logo.png" alt="logo" width={500} height={500} />
          </div>
          <div className="lg:w-[600px] mt-12">
            <h1 className="text-3xl text-left lg:text-nowrap font-bold">
              Hetero Institute of Pharmaceutical Sciences
            </h1>
            <p className="mt-12">
              A new star has born in the galaxy of pharmacy colleges in
              Telangana in the academic year 2007-2008 to guide the students in
              the areas of wisdom and excellence in pharmacy education. Vipasana
              Educational Society has established, Hetero Institute of
              Pharmaceutical Sciences by Sri. B. Parthasaradhi Reddy.
            </p>
            <p className="mt-6">
              It is located in lush green surroundings of B.Gangaram and is just
              7 km away from Sathupally. The college is affiliated to the JNTUH
              and approved by Pharmacy council of India (PCI) and All India
              Council of Technical Education (AICTE). The college aim is to
              create ‘World Class’ Infrastructure and Training Environment,
              enabling each student to realize his/her true potential. From the
              day of its inception the college is producing highly qualified
              human resources who are academically superior and ethically
              strong. It offers both under graduate and post graduate Pharmacy
              courses.
            </p>
            <p className="mt-6">
              The college is headed by Dr.J.V.C Sharma M.Pharm, Ph.D who has got
              22 years of experience in teaching and Pharmaceutical industry.
            </p>
            <div className="  mt-12   flex items-center justify-center ">
            <Image src="/logo.png" alt="logo" width={150} height={100} />
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
