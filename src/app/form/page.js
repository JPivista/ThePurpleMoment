"use client";
import React, { useState } from "react";
import MovementForm from "../../utils/MovementForm";
import { motion, AnimatePresence } from "framer-motion";

const CareersFetchData = () => {
  const [isOpen, setIsOpen] = useState(false);

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
      <style>
        {`
       
        ul li {
          margin-bottom: 0.5rem !important;
        }

        ul {
          padding-left: 0px !important;
          margin-top: 1rem !important;
        }
      `}
      </style>

      <div className="container mx-auto bg-white text-black mb-10 px-4 lg:px-0 mt-32">
        <style>{`input[type="file"] { color: white; }`}</style>

        <div className="flex flex-col space-y-6">
          <div>
            <p className="mt-2 text-lg">
              We are a vibrant digital marketing agency with a team that brings
              diverse perspectives and creative energy to our projects. At
              iVistaz, we take pride in our collaborative and supportive
              environment where work and learning go hand-in-hand. Our projects
              range from web development, paid marketing, social media campaigns
              and email marketing, offering you the chance to build on your
              experience and develop a broad skill set. Located in the heart of
              the city, our office is easily accessible and surrounded by a
              vibrant mix of offices, shopping streets, restaurants, and parks.
              Check out our current openings and take the next step in your
              career with iVistaz.
            </p>
          </div>

          <div className="mt-10">
            <button onClick={handleShowModal} className="btn-16 w-60">
              Apply Now
            </button>
          </div>

          {/* Modal with AnimatePresence */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center"
              >
                {/* Backdrop with blur effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  exit={{ opacity: 0 }}
                  onClick={handleCloseModal}
                  className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm cursor-pointer z-40"
                ></motion.div>

                {/* Modal content */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="relative bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto z-50 p-6 lg:p-10 mx-4"
                >
                  <button
                    onClick={handleCloseModal}
                    className="absolute top-4 right-4 text-black hover:text-red-500 text-xl font-bold"
                  >
                    &times;
                  </button>
                  <div className="text-black">
                    <h3 className="text-2xl font-bold mb-4">
                      Purple Pledge
                    </h3>
                    <MovementForm onSuccess={handleFormSuccess} />
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          <p className="text-lg mt-6">
            For enquiries about any positions not listed, please email
            <a
              href="mailto:careers@ivistaz.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 underline ml-1"
            >
              careers@ivistaz.com
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default CareersFetchData;
