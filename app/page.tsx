"use client";
import React, { useState } from "react";
import Hero from "@/components/Hero";
import YourComponent from "@/components/FacultyRequirement";
import FloatingIcons from "@/components/SocialLinks";
import Modal from "@/components/IndexModal";
function Page() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className="mt-[105px] lg:mt-[205px] ">
      <Hero />
      <YourComponent />
      <FloatingIcons />

      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default Page;
