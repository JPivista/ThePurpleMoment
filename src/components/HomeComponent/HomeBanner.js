import Image from "next/image";

const HomeBanner = () => {
    return (
        <section className="relative pt-10 bg-gray-50">
            <div className="container mx-auto md:min-h-[60vh] min-h-[75vh] flex md:items-center items-end">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content Area */}
                    <div className="md:px-0 px-4 space-y-2">
                        <h1 className="text-[30px] md:text-[40px] font-bold text-black ">
                            The Pledge for Inclusion
                        </h1>
                        <p className="text-[18px] font-regular font-poppins text-black">
                            Inclusion. Awareness. Action.
                        </p>
                        <p className="text-[18px] Poppins-bold  text-custom-purple">
                            #ThePurpleMovement
                        </p>
                    </div>

                    {/* Right Image Area */}
                    <div className="">
                        <div className="">
                            <Image
                                src="/home/the-purple-momnet-banner.webp"
                                alt="The Purple Moment - Hands touching globe"
                                width={1700}
                                height={1700}
                                className="w-full h-auto rounded-lg lg:absolute lg:right-0 lg:bottom-0 lg:w-[55%]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeBanner;
