import React from 'react'
import Image from "next/image";

const TheBigPicture = () => {
    return (
        <>
            <section className="relative pt-10 bg-gray-50">
                <div className="container mx-auto flex flex-col items-center justify-center md:space-y-8 space-y-4 md:px-0 px-4">
                    <h2 className="md:text-4xl text-2xl font-bold text-black Merriweather-regular text-center">
                        The Big Picture <br />
                        <span className="text-custom-purple">Why Inclusion Matters</span>
                    </h2>
                    <div className="w-full flex justify-center">
                        <Image
                            src="/home/the-big-picture-why-inclusion-matters.png"
                            alt="The Big Picture - Why Inclusion Matters"
                            width={800}
                            height={600}
                            className="w-[60%] h-auto rounded-lg"
                        />
                    </div>
                    <div className="space-y-4">
                        <p className="text-center text-black Poppins-light">
                            Over 1.3 billion people globally, nearly <span className="text-custom-purple Poppins-bold">15% of the world’s population</span>, live with some form of disability. <br />
                            If this community were a nation, it would be the third-largest economy in the world, after the U.S. and China
                        </p>
                        <p className="text-center text-black Poppins-light">
                            Yet, fewer than half of working-age persons with disabilities (PwDs) are employed. <br />
                            This isn’t due to lack of skill or ambition, it’s because of barriers built into workplaces, systems, and mindsets.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row justify-center items-center bg-[#0190CA] rounded-2xl md:p-10 p-4 gap-4 md:w-[80%] w-full mx-auto">
                        <div clssName="md:w-1/2 w-full">
                            <p className="text-white Poppins-light">
                                Inclusive businesses don’t just ‘do good’ — they perform better. Research by McKinsey and Accenture shows companies with strong inclusion policies are 30% more profitable and have higher employee retention.
                            </p>
                        </div>
                        <div className="flex justify-center items-center">
                            <Image
                                src="/home/inclussive-business.png"
                                alt="The Big Picture - Why Inclusion Matters"
                                width={800}
                                height={600}
                                className="h-auto rounded-lg"
                            />
                        </div>
                    </div>

                    <div className="text-center text-black Poppins-light">
                        <p>
                            Only 53 of 114 countries have enacted comprehensive disability legislation aligned with the Convention on the Rights of Persons with Disabilities (CRPD). Underemployment of persons with disabilities costs up to 7% of GDP in low- and middle-income countries. Barriers persist in critical sectors like climate action, migration, and digital technology, often excluding disabled persons from key opportunities.
                        </p>
                    </div>

                    <div className="text-center text-custom-purple Merriweather-light">
                        <p className="Merriweather-light italic">
                            Accessibility is not charity. It’s good business and good humanity.
                        </p>
                    </div>
                </div>
            </section>

            <section
                className="relative py-10 md:px-0 px-4 md:my-10 my-6"
                style={{
                    background: 'linear-gradient(90deg, #92329D 0%, #BF5ACA 100%)'
                }}
            >
                <div className="container mx-auto md:space-y-8 space-y-4">
                    <div className="flex flex-col md:flex-row justify-center items-center lg:space-y-0 space-y-4">
                        <div className="md:w-[40%] w-full flex justify-center items-center">
                            <Image
                                src="/home/indias-moment.png"
                                alt="India's Moment"
                                width={800}
                                height={600}
                                className="md:w-[70%] w-full h-auto rounded-lg"
                            />
                        </div>
                        <div className="md:w-[60%] w-full space-y-4">
                            <h2 className="text-white text-4xl font-bold Merriweather-regular">
                                India’s Moment
                            </h2>
                            <p className="text-white Poppins-light">
                                India has an estimated 50-80 million persons with disabilities (PwDs), with approximately 30 million considered employable. Despite progressive laws such as the Rights of Persons with Disabilities (RPwD) Act, 2016, which mandates a 4% reservation in government jobs for PwDs, only about 36% of PwDs participate in the labor force compared to 60% of non-disabled adults (National Statistical Office, 2019).
                            </p>
                            <p className="text-white Poppins-light">
                                Employment for disabled women is especially low at around 23%. Over 90% of PwDs work in informal sectors like agriculture and home-based crafts, often without social security or fair wages. Accessibility remains a major hurdle, with under 25% of workplaces meeting basic accessibility standards, despite government campaigns like the Accessible India Campaign
                            </p>
                        </div>
                    </div>
                    <div className="text-center text-white Poppins-light md:w-[80%] w-full mx-auto border border-white/30 rounded-lg p-4">
                        <p>
                            India is at an inflection point for disability inclusion. Bengaluru, as India’s innovation capital, can become the Purple Capital, leading the country in accessible workspaces, transport, and technology.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TheBigPicture
