"use client";
import React, { useEffect, useState } from "react";
import { MdOutlinePhone } from "react-icons/md";
import { FiMail } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import { ImWhatsapp } from "react-icons/im";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { GrInstagram } from "react-icons/gr";
import { BsTwitterX } from "react-icons/bs";
import { RiYoutubeLine } from "react-icons/ri";
import { useFontSize } from "@/utils/FontSizeContext";
import Image from "next/image";
import Navbar from "./Navbar";

const socialLinks = [
  {
    href: "https://wa.me/9440154950",
    icon: <ImWhatsapp className="text-lg" />,
    label: "WhatsApp",
  },
  {
    href: "https://facebook.com/your-profile",
    icon: <TiSocialFacebookCircular className="text-2xl" />,
    label: "Facebook",
  },
  {
    href: "https://instagram.com/your-profile",
    icon: <GrInstagram className="text-md" />,
    label: "Instagram",
  },
  {
    href: "https://twitter.com/your-profile",
    icon: <BsTwitterX className="text-md" />,
    label: "Twitter",
  },
  {
    href: "https://youtube.com/your-profile",
    icon: <RiYoutubeLine className="text-2xl" />,
    label: "YouTube",
  },
];

const Header: React.FC = () => {
  const { fontSize, increaseFontSize, decreaseFontSize, resetFontSize } =
    useFontSize();
  const [date, setDate] = useState(() => new Date());
  const [time, setTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timer); // Clean up the timer on component unmount
  }, []);
  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      setTime(
        date.toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <header className=" ">
        <section className={`w-full min-h-8 bg-[#006401] `}>
          <div className="flex flex-col md:flex-row justify-between gap-y-2 p-2 text-white">
            <div className="flex flex-wrap items-center text-xs gap-x-4 gap-y-2">
              <div className="flex items-center mx-auto">
                <p>{date.toLocaleDateString("en-GB")}</p>
                <p>, {date.toLocaleDateString("en-US", { weekday: "long" })}</p>
                <p className="min-w-20 ml-2">{time}</p>
              </div>

              <div className="flex items-center gap-2">
                <FaLocationDot />
                B.Gangaram, Sathupally, Khammam(Dist), Telangana - 507303
              </div>
              <div className="flex gap-x-16 lg:gap-x-4 justify-center gap-y-2 flex-wrap">
                <ContactInfo
                  Icon={MdOutlinePhone}
                  contactDetails={[
                    { href: "tel:8639162027", text: "8639162027" },
                    { href: "tel:9440154950", text: "9440154950" },
                  ]}
                />
                <ContactInfo
                  Icon={FiMail}
                  contactDetails={[
                    {
                      href: "mailto:hipsr.principal@gmail.com",
                      text: "hipsr.principal@gmail.com",
                    },
                  ]}
                />
              </div>
            </div>
            <div className="flex gap-3 mt-2 md:mt-0 justify-center items-center px-2">
              <FontSizeButton onClick={decreaseFontSize} text="A-" />
              <FontSizeButton onClick={resetFontSize} text="A" />
              <FontSizeButton onClick={increaseFontSize} text="A+" />
            </div>
            <div className="flex  gap-3 mt-2 md:mt-0 justify-center items-center px-2">
              {socialLinks.map(({ href, icon, label }) => (
                <a key={label} href={href} aria-label={label}>
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </section>

        <Navbar />
      </header>
    </>
  );
};

const ContactInfo: React.FC<{
  Icon: React.ElementType;
  contactDetails: { href: string; text: string }[];
}> = ({ Icon, contactDetails }) => (
  <div className="flex items-center gap-2">
    <Icon className="text-base" />
    {contactDetails.map(({ href, text }) => (
      <a key={text} href={href} className="hover:underline">
        {text}
      </a>
    ))}
  </div>
);

const FontSizeButton: React.FC<{ onClick: () => void; text: string }> = ({
  onClick,
  text,
}) => (
  <button onClick={onClick} className="border border-white text-xs px-1">
    {text}
  </button>
);

export default Header;
