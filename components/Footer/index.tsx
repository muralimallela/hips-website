import React from "react";
import { MdLocationPin } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const Footer: React.FC = () => {
  return (
    <div className="relative bg-[#006401]">
      <div className="flex flex-wrap lg:flex-nowrap justify-center p-8 space-y-6 gap-x-12">
        <div className="w-full lg:w-[1000px]">
          <img
            src="https://www.hip.ac.in/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-14-at-3.05.43-PM-300x286.jpeg"
            alt="Institute Logo"
            className="w-full h-auto rounded-full"
          />
        </div>

        <nav className="w-full lg:ml-24">
          <h2 className="text-2xl font-bold text-white mt-12 lg:mt-0">
            Quick Links
          </h2>
          <ul className="space-y-2 text-white mt-6">
            {navItems.map((item) => (
              <NavItem key={item.title} {...item} />
            ))}
          </ul>
        </nav>

        <div>
          <h1 className="text-2xl mt-12 lg:mt-0 font-bold text-white">
            Connect with Us
          </h1>
          <h3 className="text-xl font-semibold text-white mt-3">Campus:</h3>
          <div className="flex gap-3 text-white justify-end mt-3">
            <MdLocationPin className="text-3xl" />
            <p className="text-sm">
              HETERO INSTITUTE OF PHARMACEUTICAL SCIENCES (Sai Spurthi Institute
              of Technology Campus) B. Gangaram, Sathupally, Khammam Dt.,
              Telangana – 507 303.
            </p>
          </div>
          <ContactInfo
            icon={<FaPhone />}
            text="hipsr.principal@gmail.com"
            href="mailto:hipsr.principal@gmail.com"
          />
          <ContactInfo
            icon={<IoMail />}
            text="8639162027"
            href="tel:8639162027"
          />
        </div>

        <div>
          <MapEmbed />
        </div>
      </div>

      <footer className="text-center px-6 text-sm text-white">
        <hr />
        <p className="mt-2 py-3 lg:p-3">
          Copyright © 2024 Hetero Institute of Pharmaceutical Sciences | Powered
          by Hetero Institute of Pharmaceutical Sciences
        </p>
      </footer>
    </div>
  );
};

const navItems = [
  { title: "Home", href: "/" },
  {
    title: "About Us",
    href: "/about-us-2/",
    subItems: [
      { title: "Chairman Message", href: "/chairman-message/" },
      { title: "Mission", href: "/mission/" },
      { title: "Vision", href: "/vision/" },
      { title: "Governing Body", href: "/governing-body/" },
    ],
  },
  {
    title: "Academic",
    href: "/academic/",
    subItems: [
      { title: "Courses", href: "/courses/" },
      { title: "Faculty", href: "/faculty/" },
      { title: "Research", href: "/research/" },
      { title: "Publications", href: "/publications/" },
    ],
  },
  {
    title: "Administration",
    href: "/administration/",
    subItems: [
      { title: "Administrative Officers", href: "/administrative-officers/" },
      { title: "Department Heads", href: "/department-heads/" },
      { title: "Student Services", href: "/student-services/" },
    ],
  },
  { title: "Contact", href: "/contact/" },
  { title: "Gallery", href: "/gallery/" },
  { title: "Careers", href: "/careers/" },
];

const NavItem: React.FC<{
  title: string;
  href: string;
  subItems?: { title: string; href: string }[];
}> = ({ title, href, subItems }) => {
  return (
    <li className="relative group">
      <a href={href} className="block">
        {title}
      </a>
      {subItems && (
        <ul className="absolute left-0 hidden mt-2 space-y-2 bg-white shadow-lg ">
          {subItems.map((item) => (
            <li key={item.title}>
              <a href={item.href} className="block px-4 py-2 ">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

const ContactInfo: React.FC<{
  icon: React.ReactNode;
  text: string;
  href: string;
}> = ({ icon, text, href }) => {
  return (
    <div className="flex gap-3 text-white items-center mt-3">
      {icon}
      <a className="text-sm" href={href}>
        {text}
      </a>
    </div>
  );
};

const MapEmbed: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-12 justify-center mt-12 lg:mt-0">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1928.042546339741!2d80.899445!3d17.198402!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3685005d152329%3A0xbad7c2964327ba77!2sHETERO%20INSTITUTE%20OF%20PHARMACEUTICAL%20SCIENCES!5e1!3m2!1sen!2sin!4v1721682108455!5m2!1sen!2sin"
        width="350"
        height={450}
        className="border-0 rounded-xl"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Footer;
