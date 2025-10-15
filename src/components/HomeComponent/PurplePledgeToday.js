import React from 'react'
import Image from 'next/image'

const PurplePledgeToday = () => {
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
      <section className="relative md:py-10 py-6 bg-white">
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
          >
            <span className="">Take the Pledge</span>
          </button>
        </div>
      </section>
    </>
  )
}

export default PurplePledgeToday