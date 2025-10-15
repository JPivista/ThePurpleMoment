import Image from 'next/image'
import React from 'react'

const ThePurplePledge = () => {
    return (
        <>
            <section className="relative pt-10 bg-gray-50">
                <div className="container mx-auto flex flex-col  md:space-y-8 space-y-4 md:px-0 px-4">
                    <h2 className="md:text-4xl text-2xl font-bold text-custom-purple Merriweather-regular text-start">
                        The Purple Pledge <br />
                        <span className="text-black">A Commitment to Inclusion</span>
                    </h2>

                    <p className="text-start text-black Poppins-light">
                        The Purple Pledge is a simple, actionable commitment by individuals and organizations to make their spaces, physical, digital, and cultural, more accessible for everyone. It’s not about audits or certification. It’s about awareness, empathy, and intent.
                    </p>

                    <div className="md:p-10 p-4 border border-[#E0B6E5] rounded-4xl md:w-[80%] w-full mx-auto">
                        <div className="flex md:flex-row flex-col gap-4">
                            <div className='space-y-5 md:space-x-8 md:w-[60%]'>
                                <h2 className="text-2xl font-bold text-custom-purple Merriweather-regular">
                                    The Pledge Principles
                                </h2>
                                <div className='space-y-1'>
                                    <h3 className="text-xl font-bold text-black Poppins-bold">
                                        Empathy before infrastructure
                                    </h3>
                                    <p className="text-black Poppins-light">
                                        We will see accessibility as dignity, not charity.
                                    </p>
                                </div>
                                <div className='space-y-1'>
                                    <h3 className="text-xl font-bold text-black Poppins-bold">
                                        Access for all
                                    </h3>
                                    <p className="text-black Poppins-light">
                                        We will ensure our spaces and systems work for everyone.
                                    </p>
                                </div>
                                <div className='space-y-1'>
                                    <h3 className="text-xl font-bold text-black Poppins-bold">
                                        Voice and visibility
                                    </h3>
                                    <p className="text-black Poppins-light">
                                        We will include persons with disabilities in decisions that affect them.
                                    </p>
                                </div>
                                <div className='space-y-1'>
                                    <h3 className="text-xl font-bold text-black Poppins-bold">
                                        Learning mindset
                                    </h3>
                                    <p className="text-black Poppins-light">
                                        We will train, sensitize, and continuously evolve.
                                    </p>
                                </div>
                                <div className='space-y-1'>
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
                                            background: 'linear-gradient(135deg, #84298E 0%, #B454BF 100%)',
                                            fontFamily: 'var(--font-poppins)'
                                        }}
                                    >
                                        <span className="">Take the Pledge</span>
                                    </button>
                                </div>
                            </div>

                            <div className='md:w-[40%] w-full'>
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
        </>
    )
}

export default ThePurplePledge