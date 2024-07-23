import React, { useEffect, useState } from 'react';
import { FaWhatsapp, FaPhone, FaEnvelope } from 'react-icons/fa';

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
      className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity bg-gray-900 bg-opacity-50 duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
      style={{ transition: 'opacity 300ms ease-in-out' }}
    >
      <div
        className={`bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto transform transition-transform duration-300 ${isOpen ? 'scale-100' : 'scale-95'}`}
        style={{ transition: 'transform 300ms ease-in-out' }}
      >
        <div className="flex justify-between items-center border-b pb-4 mb-4">
          <h2 className="text-xl font-semibold">HIPS - Hetero Institute of Pharmaceutical Sciences</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900"
          >
            &times;
          </button>
        </div>
        <div className="text-center mb-6">
          <p className="text-lg mb-4">Welcome to HIPS, Admissions are open</p>
          <a
            href="#apply"
            className="inline-block px-4 py-2 mb-4 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Apply Now
          </a>
        </div>
        <div className="flex justify-center space-x-4">
          <a
            href="https://wa.me/9441797744"
            target="_blank"
            title="9444197744"
            rel="noopener noreferrer"
            className="text-green-500 hover:text-green-600"
          >
            <FaWhatsapp size={24} />
          </a>
          <a
            href="tel:9441797744"
            className="text-blue-500 hover:text-blue-600"
          >
            <FaPhone size={24} />
          </a>
          <a
            href="mailto:hips.r.principal@gmail.com"
            className="text-red-500 hover:text-red-600"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
