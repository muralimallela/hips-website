"use client";
import React, { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import FacultyRequirement from "@/components/FacultyRequirement";

import Modal from "@/components/IndexModal";

function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Hero />
      <FacultyRequirement />
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

export default Page;
