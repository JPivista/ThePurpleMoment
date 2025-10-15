"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MovementForm from "../../utils/MovementForm";
import IndividualPledgeForm from "@/utils/IndividualPledgeForm";

const ThePurplePledge = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("institution"); // institution or individual

  const handleShowModal = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden"; // Disable scrolling
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    document.body.style.overflow = ""; // Enable scrolling
  };

  const handleFormSuccess = () => {
    setIsOpen(false);
  };
  return (
    <>
      <section className="relative pt-10 bg-gray-50">
        <div className="container mx-auto flex flex-col  md:space-y-8 space-y-4 md:px-0 px-4">
          <h2 className="md:text-4xl text-2xl font-bold text-custom-purple Merriweather-regular text-start">
            The Purple Pledge <br />
            <span className="text-black">A Commitment to Inclusion</span>
          </h2>

          <p className="text-start text-black Poppins-light">
            The Purple Pledge is a simple, actionable commitment by individuals
            and organizations to make their spaces, physical, digital, and
            cultural, more accessible for everyone. It’s not about audits or
            certification. It’s about awareness, empathy, and intent.
          </p>

          <div className="md:p-10 p-4 border border-[#E0B6E5] rounded-4xl md:w-[80%] w-full mx-auto">
            <div className="flex md:flex-row flex-col gap-4">
              <div className="space-y-5 md:space-x-8 md:w-[60%]">
                <h2 className="text-2xl font-bold text-custom-purple Merriweather-regular">
                  The Pledge Principles
                </h2>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-black Poppins-bold">
                    Empathy before infrastructure
                  </h3>
                  <p className="text-black Poppins-light">
                    We will see accessibility as dignity, not charity.
                  </p>
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-black Poppins-bold">
                    Access for all
                  </h3>
                  <p className="text-black Poppins-light">
                    We will ensure our spaces and systems work for everyone.
                  </p>
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-black Poppins-bold">
                    Voice and visibility
                  </h3>
                  <p className="text-black Poppins-light">
                    We will include persons with disabilities in decisions that
                    affect them.
                  </p>
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-black Poppins-bold">
                    Learning mindset
                  </h3>
                  <p className="text-black Poppins-light">
                    We will train, sensitize, and continuously evolve.
                  </p>
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-black Poppins-bold">
                    Public commitment
                  </h3>
                  <p className="text-black Poppins-light">
                    We will display our pledge and inspire others to follow.
                  </p>
                </div>
                <div>
                  {/* Join Button */}
                  <button
                    className="px-3 py-1.5 md:px-6 md:py-2 rounded-full font-normal hover:opacity-90 transition-opacity duration-300 text-white text-sm md:text-[20px]"
                    style={{
                      background:
                        "linear-gradient(135deg, #84298E 0%, #B454BF 100%)",
                      fontFamily: "var(--font-poppins)",
                    }}
                    onClick={handleShowModal}
                  >
                    <span className="">Take the Pledge</span>
                  </button>
                </div>
              </div>

              <div className="md:w-[40%] w-full">
                <Image
                  src="/home/the-pledge-principles.png"
                  alt="The Pledge Principles"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Modal with AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`
                    fixed inset-0 z-50 flex items-center justify-center
                }`}
          >
            {/* Backdrop with blur effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              // onClick={handleCloseModal}
              className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm cursor-pointer z-50"
            ></motion.div>

            {/* Modal content */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="relative bg-white rounded-none max-w-6xl w-full max-h-[90vh] overflow-y-auto z-50 p-6 lg:p-10 mx-4"
            >
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 text-black hover:text-red-500 text-5xl font-bold"
              >
                &times;
              </button>
              <div className="text-black">
                <h3 className="text-2xl font-bold mb-4">
                  Take the Purple Pledge Today
                </h3>

                {/* Tabs */}
                <div className="flex space-x-1 mb-6 bg-gray-100 p-1 rounded-lg">
                  <button
                    onClick={() => setActiveTab("institution")}
                    className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
                      activeTab === "institution"
                        ? "bg-white text-[#84298E] shadow-sm"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    For Oganizations and Institutions
                  </button>
                  <button
                    onClick={() => setActiveTab("individual")}
                    className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
                      activeTab === "individual"
                        ? "bg-white text-[#84298E] shadow-sm"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    For Individual
                  </button>
                </div>

                {/* Tab Content */}
                {activeTab === "institution" ? (
                  <div>
                    <p className="mb-4">
                      Join the Purple Movement and commit to building a fairer,
                      more inclusive future. This form is currently open to
                      institutions. If you wish to take the pledge as an
                      individual, please write to us.
                    </p>
                    <MovementForm onSuccess={handleFormSuccess} />
                  </div>
                ) : (
                  <div>
                    <p className="mb-4">
                      Join the Purple Movement and commit to building a fairer,
                      more inclusive future. This form is for individuals who
                      wish to take the pledge in their personal capacity.
                    </p>
                    <IndividualPledgeForm onSuccess={handleFormSuccess} />
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ThePurplePledge;
