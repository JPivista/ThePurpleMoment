// import React from 'react'
// import Image from 'next/image'

// const PurplePledgeToday = () => {
//   const pledgeBlocks = [
//     {
//       title: "Corporates",
//       icon: "/home/corporates.svg",
//       description: "Commit to accessible design, hiring, and culture."
//     },
//     {
//       title: "Institutions",
//       icon: "/home/institutions.svg",
//       description: "Make your campus inclusive and welcoming."
//     },
//     {
//       title: "Individuals",
//       icon: "/home/individuals.svg",
//       description: "Be accessibility advocates in your daily life."
//     }
//   ];

//   return (
//     <>
//       <section className="relative md:py-10 py-6 bg-white">
//         <div className="container mx-auto flex flex-col items-center justify-center md:space-y-8 space-y-6 md:px-0 px-4">
//           <h2 className="md:text-4xl text-2xl font-bold text-custom-purple Merriweather-regular text-center">
//             Take the Purple Pledge Today
//           </h2>
//           <p className="text-black Poppins-light text-center md:w-[60%] w-full">
//             Every ramp built, every caption added, every job opened, makes the world a little more purple.
//           </p>

//           {/* Three Blocks */}
//           <div className="w-full">
//             {/* Desktop: 3 blocks in a row */}
//             <div className="hidden md:grid md:grid-cols-3 gap-8 w-full">
//               {pledgeBlocks.map((block, index) => (
//                 <div key={index} className="flex flex-col items-center text-center space-y-4">
//                   <div className="w-20 h-20 flex items-center justify-center">
//                     <Image
//                       src={block.icon}
//                       alt={block.title}
//                       width={80}
//                       height={80}
//                       className="w-full h-full"
//                     />
//                   </div>
//                   <h3 className="text-black Poppins-bold text-xl">
//                     {block.title}
//                   </h3>
//                   <p className="text-black Poppins-light text-sm leading-relaxed">
//                     {block.description}
//                   </p>
//                 </div>
//               ))}
//             </div>

//             {/* Mobile: 1 block per row */}
//             <div className="md:hidden space-y-6">
//               {pledgeBlocks.map((block, index) => (
//                 <div key={index} className="flex flex-col items-center text-center space-y-4">
//                   <div className="w-16 h-16 flex items-center justify-center">
//                     <Image
//                       src={block.icon}
//                       alt={block.title}
//                       width={64}
//                       height={64}
//                       className="w-full h-full"
//                     />
//                   </div>
//                   <h3 className="text-black Poppins-bold text-lg">
//                     {block.title}
//                   </h3>
//                   <p className="text-black Poppins-light text-sm leading-relaxed">
//                     {block.description}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Call to Action Button */}
//           {/* Join Button */}
//           <button
//             className="px-3 py-1.5 md:px-6 md:py-2 rounded-full font-normal hover:opacity-90 transition-opacity duration-300 text-white text-sm md:text-[20px]"
//             style={{
//               background: 'linear-gradient(135deg, #84298E 0%, #B454BF 100%)',
//               fontFamily: 'var(--font-poppins)'
//             }}
//           >
//             <span className="">Take the Pledge</span>
//           </button>
//         </div>
//       </section>
//     </>
//   )
// }

// export default PurplePledgeToday



"use client";
import React from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from "framer-motion";
import MovementForm from "../../utils/MovementForm";
import IndividualPledgeForm from "@/utils/IndividualPledgeForm";
import { useState } from "react";
const PurplePledgeToday = () => {
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

  const pledgeBlocks = [
    {
      title: "Corporates",
      icon: "/home/corporates.svg",
      description: "Commit to accessible design, hiring, and culture."
    },
    {
      title: "Institutions",
      icon: "/home/institutions.svg",
      description: "Make your campus inclusive and welcoming."
    },
    {
      title: "Individuals",
      icon: "/home/individuals.svg",
      description: "Be accessibility advocates in your daily life."
    }
  ];

  return (
    <>
      <section className="relative py-10 bg-white">
        <div className="container mx-auto flex flex-col items-center justify-center md:space-y-8 space-y-6 md:px-0 px-4">
          <h2 className="md:text-4xl text-2xl font-bold text-custom-purple Merriweather-regular text-center">
            Take the Purple Pledge Today
          </h2>
          <p className="text-black Poppins-light text-center md:w-[60%] w-full">
            Every ramp built, every caption added, every job opened, makes the world a little more purple.
          </p>

          {/* Three Blocks */}
          <div className="w-full">
            {/* Desktop: 3 blocks in a row */}
            <div className="hidden md:grid md:grid-cols-3 gap-8 w-full">
              {pledgeBlocks.map((block, index) => (
                <div key={index} className="flex flex-col items-center text-center space-y-4">
                  <div className="w-20 h-20 flex items-center justify-center">
                    <Image
                      src={block.icon}
                      alt={block.title}
                      width={80}
                      height={80}
                      className="w-full h-full"
                    />
                  </div>
                  <h3 className="text-black Poppins-bold text-xl">
                    {block.title}
                  </h3>
                  <p className="text-black Poppins-light text-sm leading-relaxed">
                    {block.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Mobile: 1 block per row */}
            <div className="md:hidden space-y-6">
              {pledgeBlocks.map((block, index) => (
                <div key={index} className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 flex items-center justify-center">
                    <Image
                      src={block.icon}
                      alt={block.title}
                      width={64}
                      height={64}
                      className="w-full h-full"
                    />
                  </div>
                  <h3 className="text-black Poppins-bold text-lg">
                    {block.title}
                  </h3>
                  <p className="text-black Poppins-light text-sm leading-relaxed">
                    {block.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action Button */}
          {/* Join Button */}
          <button
            className="px-3 py-1.5 md:px-6 md:py-2 rounded-full font-normal hover:opacity-90 transition-opacity duration-300 text-white text-sm md:text-[20px]"
            style={{
              background: 'linear-gradient(135deg, #84298E 0%, #B454BF 100%)',
              fontFamily: 'var(--font-poppins)'
            }}
            onClick={handleShowModal}
          >
            <span className="">Take the Pledge</span>
          </button>
        </div>
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
      </section>
    </>
  )
}

export default PurplePledgeToday;