import React from 'react'

const ThePurpleEconomy = () => {
    return (
        <section className="">
            <div className="container mx-auto">
                <div className="space-y-3 mb-8">
                    <h2 className="md:text-4xl text-2xl font-bold text-black md:mb-8 mb-4 Merriweather-regular">
                        The Purple Economy
                    </h2>
                    <p className="text-black Poppins-light leading-relaxed">
                        The “Purple Economy” recognizes persons with disabilities not as beneficiaries of aid, but as contributors to productivity, innovation, and growth. It is an economy that thrives because it includes, not excludes.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* As Workforce Panel */}
                    <div className="bg-purple-custom rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-white mb-4 Merriweather-bold">
                            As Workforce
                        </h3>
                        <p className="text-white Poppins-regular leading-relaxed">
                            Inclusive hiring unlocks diverse <br /> problem-solving, empathy, and creativity. Employees with disabilities often exhibit higher resilience, discipline, and team loyalty.
                        </p>
                    </div>

                    {/* As Consumers Panel */}
                    <div className="bg-purple-custom rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-white mb-4 Merriweather-bold">
                            As Consumers
                        </h3>
                        <p className="text-white Poppins-regular leading-relaxed">
                            Globally, the disability community and their families represent nearly 3 billion consumers with over USD 13 trillion in disposable income, an enormous, largely untapped market.
                        </p>
                    </div>

                    {/* As Entrepreneurs Panel */}
                    <div className="bg-purple-custom rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-white mb-4 Merriweather-bold">
                            As Entrepreneurs
                        </h3>
                        <p className="text-white Poppins-regular leading-relaxed">
                            Across the world, entrepreneurs with disabilities are redefining innovation from accessible tech startups to adaptive fashion and mobility solutions.
                        </p>
                    </div>
                </div>
                <div className="text-center mt-10">
                    <p className="Poppins-regular text-custom-purple italic">
                        Disability inclusion is not a favor — it’s a growth strategy.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default ThePurpleEconomy