import React from 'react'

const ThePurpleEconomy = () => {
    return (
        <section className="pb-10 bg-white">
            <div className="container mx-auto px-4 lg:px-0">
                <h2 className="text-4xl font-bold text-black mb-8 Merriweather-regular">
                    The Purple Economy
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* As Workforce Panel */}
                    <div className="bg-[#DBF8E5] rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-custom-purple mb-4 Merriweather-bold">
                            As Workforce
                        </h3>
                        <p className="text-black Poppins-regular leading-relaxed">
                            Inclusive hiring unlocks diverse problem-solving, empathy, and creativity. Employees with disabilities often exhibit higher resilience, discipline, and team loyalty.
                        </p>
                    </div>

                    {/* As Consumers Panel */}
                    <div className="bg-[#DBEAF8] rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-custom-purple mb-4 Merriweather-bold">
                            As Consumers
                        </h3>
                        <p className="text-black Poppins-regular leading-relaxed">
                            Globally, the disability community and their families represent nearly 3 billion consumers with over USD 13 trillion in disposable income — an enormous, largely untapped market.
                        </p>
                    </div>

                    {/* As Entrepreneurs Panel */}
                    <div className="bg-[#F9F9E0] rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-custom-purple mb-4 Merriweather-bold">
                            As Entrepreneurs
                        </h3>
                        <p className="text-black Poppins-regular leading-relaxed">
                            Across the world, entrepreneurs with disabilities are redefining innovation — from accessible tech startups to adaptive fashion and mobility solutions.
                        </p>
                    </div>
                </div>
                <div className="text-center mt-10">
                    <p className="Poppins-regular text-custom-purple italic">
                        Join us in making the world more purple — one pledge at a time.
                    </p>
                </div>
            </div>
            <hr className="mt-10 text-[#DFCADD]" />

        </section>
    )
}

export default ThePurpleEconomy
