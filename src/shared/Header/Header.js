"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import MovementForm from "../../utils/MovementForm";
import IndividualPledgeForm from "../../utils/IndividualPledgeForm";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("institution"); // institution or individual

  const handleShowModal = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden"; // Disable scrolling
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    document.body.style.overflow = ""; // Enable scrolling
    document.body.style.paddingRight = ""; // Remove any padding that might have been added
  };

  const handleFormSuccess = () => {
    setIsOpen(false);
    document.body.style.overflow = ""; // Enable scrolling
    document.body.style.paddingRight = ""; // Remove any padding that might have been added
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      // Cleanup: ensure body scroll is restored when component unmounts
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, []);

  return (
    // <header
    //   className={`fixed top-0 left-0 right-0 z-20 transition-all duration-300`}
    // >
    <header
      className={`fixed top-0 left-0 right-0 z-20 transition-all duration-300 ${isScrolled ? "bg-white shadow-lg" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/logo.svg"
              alt="The Purple Movement Logo"
              width={18}
              height={18}
              className="w-32 h-16 md:w-48 md:h-20"
            />
          </div>

          {/* Join Button */}
          <button
            onClick={handleShowModal}
            className="px-3 py-1.5 md:px-6 md:py-2 rounded-full font-normal hover:opacity-90 transition-opacity duration-300 text-white text-sm md:text-[20px]"
            style={{
              background: "linear-gradient(135deg, #84298E 0%, #B454BF 100%)",
              fontFamily: "var(--font-poppins)",
            }}
          >
            <span className="">Take the Pledge</span>
          </button>

          {/* Modal with AnimatePresence */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-0 flex items-center justify-center"
              >
                {/* Backdrop with blur effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  exit={{ opacity: 0 }}
                  // onClick={handleCloseModal}
                  className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm cursor-pointer z-0"
                ></motion.div>

                {/* Modal content */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="relative bg-white rounded-none max-w-6xl w-full max-h-[90vh] overflow-y-auto z-0 p-6 lg:p-10 mx-4"
                >
                  <button
                    onClick={handleCloseModal}
                    className="absolute top-4 right-4 z-50 text-black hover:text-red-500 lg:text-5xl text-3xl font-bold bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-200"
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
                        className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${activeTab === "institution"
                          ? "bg-white text-[#84298E] shadow-sm"
                          : "text-gray-600 hover:text-gray-900"
                          }`}
                      >
                        For Oganizations and Institutions
                      </button>
                      <button
                        onClick={() => setActiveTab("individual")}
                        className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${activeTab === "individual"
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
                          Join the Purple Movement and commit to building a
                          fairer, more inclusive future. This form is currently
                          open to institutions.
                        </p>
                        <MovementForm onSuccess={handleFormSuccess} />
                      </div>
                    ) : (
                      <div>
                        <p className="mb-4">
                          Join the Purple Movement and commit to building a
                          fairer, more inclusive future. This form is for
                          individuals who wish to take the pledge in their
                          personal capacity.
                        </p>
                        <IndividualPledgeForm onSuccess={handleFormSuccess} />
                      </div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

export default Header;
