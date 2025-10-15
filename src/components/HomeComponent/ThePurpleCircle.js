import Image from 'next/image'
import React from 'react'

const ThePurpleCircle = () => {
    return (
        <>
            <section className="relative pt-10 bg-gray-50">
                <div className="container mx-auto flex flex-col items-center justify-center md:space-y-8 space-y-4 md:px-0 px-4">
                    <div className='flex md:flex-row flex-col justify-center items-center'>
                        <div className='flex flex-col space-y-4 w-1/2'>
                            <h2 className="md:text-4xl text-2xl font-bold text-custom-purple Merriweather-regular">
                                The Purple Circle <br />
                                <span className="text-black">A Community of Practice</span>
                            </h2>
                            <p className="text-black Poppins-light">
                                The Purple Circle is a network of pledge-taking organizations that meet quarterly to share ideas, learn from one another, and celebrate progress. Joining the Circle means joining a community of leaders who believe accessibility builds stronger businesses and
                                better societies.
                            </p>
                        </div>

                        <div className='w-1/2'>
                            <Image
                                src="/home/the-purple-circle.webp"
                                alt="The Purple Circle"
                                width={800}
                                height={600}
                            />
                        </div>
                    </div>
                </div>
                <div className="container mx-auto">
                    <hr className="my-10 text-[#DFCADD]" />
                </div>
            </section>

        </>
    )
}

export default ThePurpleCircle
