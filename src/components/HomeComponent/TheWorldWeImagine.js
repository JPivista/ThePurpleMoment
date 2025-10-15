'use client'
import React, { useState } from 'react'
import Image from 'next/image'

const TheWorldWeImagine = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        {
            title: "The Business Case for Inclusion",
            content: {
                summary: "Inclusive companies outperform their peers in every dimension of success — innovation, loyalty, brand reputation, and profitability. Accessibility drives value and aligns perfectly with ESG and CSR priorities.",
                points: [
                    {
                        title: "Innovation",
                        description: "Microsoft, Unilever, and SAP have inclusive design labs that serve all consumers."
                    },
                    {
                        title: "Productivity",
                        description: "Accessible environments reduce friction for everyone."
                    },
                    {
                        title: "Reputation",
                        description: "Inclusion builds trust and customer preference."
                    },
                    {
                        title: "Compliance",
                        description: "India's Rights of Persons with Disabilities Act (2016) mandates inclusion."
                    }
                ],
                image: "/home/the-business-case-for-inclusion.png"
            }
        },
        {
            title: "How Organizations Can Begin",
            content: {
                // summary: "Starting the inclusion journey requires commitment, planning, and actionable steps. Organizations can begin by assessing current accessibility, training teams, and implementing inclusive policies.",
                // heading: "5 Steps to Get Started",
                numberedSteps: [
                    "Conduct an accessibility walk of your office.",
                    "Review your website and recruitment portal for screen-reader compatibility.",
                    "Set up an inclusion committee or accessibility champion.",
                    "Host a one-hour accessibility awareness session.",
                    "Share your Purple Pledge on LinkedIn or internal platforms."
                ],
                footer: "Small steps lead to systemic change.",
                points: [
                    {
                        title: "Assessment",
                        description: "Conduct accessibility audits of physical and digital spaces."
                    },
                    {
                        title: "Training",
                        description: "Educate teams on inclusive practices and disability awareness."
                    },
                    {
                        title: "Policy",
                        description: "Develop comprehensive inclusion policies and procedures."
                    },
                    {
                        title: "Implementation",
                        description: "Create action plans with measurable goals and timelines."
                    }
                ],
                image: "/home/how-organizations-can-begin.png"
            }
        },
        {
            title: "Designing for Everyone",
            content: {
                summary: "Accessibility benefits everyone — not just people with disabilities. When we design for the few, we often improve life for the many.",
                bulletPoints: [
                    "Curb ramps help wheelchairs — and also parents with strollers or travelers with luggage.",
                    "Closed captions assist the hearing-impaired — and anyone in a noisy café.",
                    "Voice assistants like Alexa or Siri began as assistive technology.Curb ramps help wheelchairs — and also parents with strollers or travelers with luggage.",
                    "Closed captions assist the hearing-impaired — and anyone in a noisy café.",
                    "Voice assistants like Alexa or Siri began as assistive technology."
                ],
                footer: "Universal Design = Better Design for All.",
                points: [
                    {
                        title: "Universal Design",
                        description: "Create solutions that work for the widest range of users."
                    },
                    {
                        title: "User Testing",
                        description: "Include people with disabilities in design and testing processes."
                    },
                    {
                        title: "Accessibility Standards",
                        description: "Follow WCAG guidelines and accessibility best practices."
                    },
                    {
                        title: "Continuous Improvement",
                        description: "Regularly review and update accessibility features."
                    }
                ],
                image: "/home/designing-for-everyone.png"
            }
        }
    ];

    return (
        <>
            <section
                className="relative py-10 md:my-10 my-6"
                style={{
                    background: 'linear-gradient(90deg, #29388D 0%, #84298E 100%)'
                }}
            >
                <div className="container mx-auto flex flex-col md:space-y-8 space-y-4 md:px-0 px-4 justify-center items-center">
                    <h2 className="md:text-4xl text-2xl font-bold text-white Merriweather-regular text-center">
                        The World We Imagine
                    </h2>
                    <p className='text-white Poppins-light text-center md:w-[50%] w-full'>
                        A world where every door opens — for everyone. The Purple Movement is not a campaign. It's a promise — that accessibility will become a way of life, not an afterthought. Together, we can make inclusion visible and create a society that truly leaves no one behind.
                    </p>

                    {/* Tab Navigation */}
                    <div className="flex flex-col md:flex-row w-full md:w-auto rounded-4xl overflow-hidden">
                        {tabs.map((tab, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={`px-4 py-2 font-medium transition-all duration-300 ${activeTab === index
                                    ? 'bg-white text-purple-800 Poppins-bold'
                                    : 'bg-white/20 text-white Poppins-regular hover:bg-white/30'
                                    }`}
                            >
                                {tab.title}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="w-full">
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-8">


                            <div className="flex md:flex-row flex-col gap-6">
                                <div className='md:w-[60%] w-full'>
                                    <p className="text-white Poppins-light text-start mb-6 leading-relaxed">
                                        {tabs[activeTab].content.summary}
                                    </p>

                                    {/* Special content for "How Organizations Can Begin" tab */}
                                    {activeTab === 1 && (
                                        <div className="mb-6">
                                            <h3 className="text-white text-2xl font-bold Poppins-bold mb-4">
                                                {tabs[activeTab].content.heading}
                                            </h3>
                                            <ol className="space-y-3 mb-6">
                                                {tabs[activeTab].content.numberedSteps.map((step, index) => (
                                                    <li key={index} className="text-white Poppins-light text-sm leading-relaxed flex items-start">
                                                        <span className="text-white Poppins-bold mr-3 min-w-[20px]">{index + 1}.</span>
                                                        <span>{step}</span>
                                                    </li>
                                                ))}
                                            </ol>
                                            <p className="text-white Poppins-light text-start">
                                                {tabs[activeTab].content.footer}
                                            </p>
                                        </div>
                                    )}

                                    {/* Special content for "Designing for Everyone" tab */}
                                    {activeTab === 2 && (
                                        <div className="mb-6">
                                            <h3 className="text-white text-xl font-bold Poppins-light mb-4">
                                                Examples:
                                            </h3>
                                            <ul className="space-y-3 mb-6">
                                                {tabs[activeTab].content.bulletPoints.map((point, index) => (
                                                    <li key={index} className="text-white Poppins-light text-sm leading-relaxed flex items-start">
                                                        <span className="text-white mr-3">•</span>
                                                        <span>{point}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                            <p className="text-white Poppins-light text-start">
                                                {tabs[activeTab].content.footer}
                                            </p>
                                        </div>
                                    )}

                                    {/* Regular points for other tabs */}
                                    {activeTab !== 1 && activeTab !== 2 && (
                                        <div className="space-y-4">
                                            {tabs[activeTab].content.points.map((point, index) => (
                                                <div key={index} className="">
                                                    <h4 className="text-white font-bold Poppins-bold mb-2">
                                                        {point.title}:
                                                    </h4>
                                                    <p className="text-white Poppins-light text-sm leading-relaxed">
                                                        {point.description}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div className="md:w-[40%] w-full flex justify-center items-center">
                                    <Image
                                        src={tabs[activeTab].content.image}
                                        alt={tabs[activeTab].title}
                                        width={400}
                                        height={300}
                                        className="w-full h-auto rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TheWorldWeImagine
