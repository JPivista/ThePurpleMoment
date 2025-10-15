import Image from "next/image";

const HomeBanner = () => {
    return (
        <section className="relative py-10 bg-gray-50">
            <div className="container mx-auto px-4 min-h-[500px] flex items-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content Area */}
                    <div>
                        <h1 className="text-[30px] md:text-[40px] font-bold text-black ">
                            The Pledge for Inclusion
                        </h1>
                        <p className="text-[18px] font-regular font-poppins text-custom-purple">
                            Inclusion. Awareness. Action.
                        </p>
                    </div>

                    {/* Right Image Area */}
                    <div className="">
                        <div className="">
                            <Image
                                src="/home/the-purple-momnet.png"
                                alt="The Purple Moment - Hands touching globe"
                                width={1700}
                                height={1700}
                                className="lg:w-[55%] w-full h-auto rounded-lg absolute right-0 bottom-0"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeBanner;
