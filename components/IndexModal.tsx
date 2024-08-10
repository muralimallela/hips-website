import React, { useEffect, useState } from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaPhone } from "react-icons/fa6";
import { IoMdCloseCircleOutline } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import { FaSquareWhatsapp } from "react-icons/fa6";
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [show, setShow] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setShow(true);
    } else {
      const timer = setTimeout(() => setShow(false), 300); // Match the duration of the fade-out
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-[10000] bg-gray-900 bg-opacity-50 transition-all duration-500 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
      style={{ transition: "opacity 300ms ease-in-out" }}
    >
      <div
        className={`bg-[#fefefa] p-1 rounded-lg shadow-lg  mx-auto transform transition-transform duration-500 ${
          isOpen ? "scale-100" : "scale-95"
        }`}
        style={{ transition: "transform 300ms ease-in-out",backgroundImage:"url('1.png')", backgroundSize:"cover" }}
      >
        <div className="flex justify-end items-center absolute top-1 lg:top-3 right-1 lg:right-3">
          {/* <h2 className="text-xl font-semibold">
            HIPS - Hetero Institute of Pharmaceutical Sciences
          </h2> */}
          <button
            onClick={onClose}
            className="text-white hover:text-gray-900 text-3xl ml-6 "
          >
            <IoMdCloseCircleOutline />
          </button>
        </div>
        <div className="text-center">
          <Link href="/admissions">
            <div className="flex absolute bottom-20 md:bottom-24 ">
              <button
                onClick={onClose}
                className=" h-10 md:h-16 md:w-40 lg:h-16 w-28 lg:w-40  hover:text-gray-900 text-3xl"
              ></button>
            </div>
          </Link>

          <Image
            src="/hips-apply.gif"
            alt="hips admission"
            width={600}
            height={200}
            className="rounded-md"
          />
        </div>
        <div className="flex mt-1 justify-center mb-1 space-x-4">
          <a
            href="https://wa.me/9441797744"
            target="_blank"
            title="9444197744"
            rel="noopener noreferrer"
            className="text-green-500 hover:text-green-600"
          >
            <FaSquareWhatsapp size={30} />
          </a>
          <a
            href="tel:9441797744"
            className="text-blue-500 hover:text-blue-600 border-2 flex py-0.5 lg:py-1 px-1  border-blue-500 rounded-full justify-center items-center"
          >
            <FaPhone size={20} />
          </a>
          <a
            href="mailto:hips.r.principal@gmail.com"
            className="text-red-500 hover:text-red-600"
          >
            <Image src="/gmail.svg" alt="gmail" width={30} height={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
