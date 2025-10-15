import React from 'react'
import Image from 'next/image'

const ThePurpleRatingFramework = () => {
    const dimensions = [
        {
            title: "Physical Accessibility",
            icon: "/home/physical-accessibility.svg",
            color: "border-purple-500",
            points: 30,
            description: "Ramps, Braille elevators, accessible toilets, proper signage"
        },
        {
            title: "Assistive Technology & Tools",
            icon: "/home/assistive-technology-and-tools.svg",
            color: "border-blue-400",
            points: 15,
            description: "Screen readers, captioning, hearing services, ergonomic seating"
        },
        {
            title: "HR & Policy Inclusion",
            icon: "/home/hr-and-policy-inclusion.svg",
            color: "border-green-500",
            points: 20,
            description: "Clearly documented inclusion policies, accommodation processes"
        },
        {
            title: "Awareness & Culture",
            icon: "/home/awareness-and-culture.svg",
            color: "border-orange-500",
            points: 15,
            description: "Sensitivity training, employee support groups, inclusive norms"
        },
        {
            title: "Emergency & Safety Readiness",
            icon: "/home/emergency-and-safety-readiness.svg",
            color: "border-blue-400",
            points: 10,
            description: "PwD inclusive evacuation plans, visual and audible alarms"
        },
        {
            title: "Feedback & Continuous Improvement",
            icon: "/home/feedback-and-continuous-improvement.svg",
            color: "border-purple-500",
            points: 10,
            description: "Regular audits, PwD feedback channels"
        }
    ];

    const ratingLevels = [
        {
            name: "Unrated",
            range: "<25 points",
            description: ""
        },
        {
            name: "Bronze",
            range: "25-44 points",
            description: "Basic compliance",
            color: "#B25F1B"
        },
        {
            name: "Silver",
            range: "45-64 points",
            description: "Foundational inclusion",
            color: "#909090"
        },
        {
            name: "Gold",
            range: "65-79 points",
            description: "Holistic implementation",
            color: "#CF9400"
        },
        {
            name: "Platinum",
            range: "80-100 points",
            description: "Role model organization",
            color: "#585240"
        }
    ];

    return (
        <>
            <section className="relative py-10 bg-[#FBEBFD]">
                <div className="container mx-auto flex flex-col justify-center md:space-y-8 space-y-4 md:px-0 px-4">
                    <div className='space-y-3'>
                        <h2 className="md:text-4xl text-2xl font-bold text-black Merriweather-regular text-start">
                            The Purple Rating Framework
                        </h2>
                        <p className="text-black Poppins-light text-start md:w-[60%] w-full">
                            To build accountability and recognition, the Purple Rating offers a measurable way to assess workplace inclusion.
                        </p>
                        <h4 className="text-custom-purple Poppins-bold text-start">
                            Six Core Dimensions:
                        </h4>
                    </div>

                    {/* Cards Grid */}
                    <div className="w-full">
                        {/* Desktop: All 6 cards in a row */}
                        <div className="hidden md:grid md:grid-cols-6 gap-4 w-full">
                            {dimensions.map((dimension, index) => (
                                <div key={index} className="bg-white rounded-lg p-4 shadow-sm border-2 border-gray-100 hover:shadow-md transition-shadow duration-300">
                                    <div className="flex flex-col space-y-3">
                                        <div className={`w-16 h-16 flex items-center justify-start`}>
                                            <Image
                                                src={dimension.icon}
                                                alt={dimension.title}
                                                width={32}
                                                height={32}
                                                className="w-8 h-8"
                                            />
                                        </div>
                                        <h3 className="text-black Poppins-regular text-sm font-medium leading-tight">
                                            {dimension.title}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Mobile: 2 cards per row */}
                        <div className="md:hidden grid grid-cols-2 gap-4">
                            {dimensions.map((dimension, index) => (
                                <div key={index} className="bg-white rounded-lg p-4 shadow-sm border-2 border-gray-100">
                                    <div className="flex flex-col items-center text-center space-y-3">
                                        <div className={`border-2 ${dimension.color} rounded-full w-12 h-12 flex items-center justify-center bg-gray-50`}>
                                            <Image
                                                src={dimension.icon}
                                                alt={dimension.title}
                                                width={24}
                                                height={24}
                                                className="w-6 h-6"
                                            />
                                        </div>
                                        <h3 className="text-black Poppins-regular text-xs font-medium leading-tight">
                                            {dimension.title}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Rating Levels Section */}
                    <div className="w-full space-y-4">
                        <h3 className="text-black Poppins-bold text-xl text-start">
                            Rating Levels:
                        </h3>
                        <div className="space-y-2 text-start">
                            {ratingLevels.map((level, index) => (
                                <div key={index} className="text-black Poppins-light">
                                    <span
                                        className="font-bold Poppins-bold"
                                        style={{ color: level.color || '#000000' }}
                                    >
                                        {level.name}:
                                    </span>
                                    <span className="ml-2">
                                        ({level.range})
                                    </span>
                                    {level.description && (
                                        <span className="ml-2 text-black">
                                            - {level.description}
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Detailed Table */}
                    <div className="w-full">
                        <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                            <div className="bg-custom-purple text-white p-4">
                                <div className="grid grid-cols-12 gap-4">
                                    <div className="col-span-4 font-bold Poppins-bold">Category</div>
                                    <div className="col-span-2 font-bold Poppins-bold text-center">Points</div>
                                    <div className="col-span-6 font-bold Poppins-bold">Description</div>
                                </div>
                            </div>
                            <div className="divide-y divide-gray-200">
                                {dimensions.map((dimension, index) => (
                                    <div key={index} className="p-4">
                                        <div className="grid grid-cols-12 gap-4 items-center">
                                            <div className="col-span-4 flex items-center space-x-3">
                                                {/* <Image
                                                    src={dimension.icon}
                                                    alt={dimension.title}
                                                    width={24}
                                                    height={24}
                                                    className="w-6 h-6"
                                                /> */}
                                                <span className="text-black Poppins-regular font-medium">
                                                    {dimension.title}
                                                </span>
                                            </div>
                                            <div className="col-span-2 text-center">
                                                <span className="text-black Poppins-regular text-lg">
                                                    {dimension.points}
                                                </span>
                                            </div>
                                            <div className="col-span-6">
                                                <span className="text-gray-700 Poppins-regular text-sm">
                                                    {dimension.description}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ThePurpleRatingFramework