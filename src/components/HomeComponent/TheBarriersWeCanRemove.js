import Image from 'next/image'
import React from 'react'

const TheBarriersWeCanRemove = () => {
    return (
        <>
            <section className="relative bg-gray-50">
                <div className="container mx-auto flex flex-col items-center justify-center md:space-y-8 space-y-4 md:px-0 px-4">
                    <h2 className="md:text-4xl text-2xl font-bold text-black Merriweather-regular text-center">
                        The Barriers We Can Remove
                    </h2>

                    {/* Image Section */}
                    <div className='w-full md:flex hidden'>
                        <Image
                            src="/home/the-barriers-we-can-remove.svg"
                            alt="The Barriers We Can Remove"
                            width={800}
                            height={600}
                            className="w-full h-auto  rounded-lg"
                        />
                    </div>

                    <div className='w-full md:hidden flex'>
                        <Image
                            src="/home/the-barriers-we-can-remove-mobile.svg"
                            alt="The Barriers We Can Remove"
                            width={800}
                            height={600}
                            className="w-full h-auto  rounded-lg"
                        />
                    </div>

                    <div>
                        <p className="text-center text-custom-purple Poppins-regular">
                            Each barrier removed doesn’t just help a few — it liberates potential for all.
                        </p>
                    </div>

                    <div className='w-full border-b border-custom-purple flex justify-center items-center'>
                        <Image
                            src="/home/each-barrier-removed.svg"
                            alt="Each Barrier Removed"
                            width={800}
                            height={600}
                            className="md:w-[80%] w-full h-auto rounded-lg"
                        />
                    </div>
                </div>

            </section>
        </>
    )
}

export default TheBarriersWeCanRemove
