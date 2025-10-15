import Image from "next/image";

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
            <div className="container mx-auto px-4 py-3 md:py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Image
                            src="/logo.svg"
                            alt="The Purple Movement Logo"
                            width={18}
                            height={18}
                            className="w-32 h-16 md:w-48 md:h-20"
                        />
                    </div>

                    {/* Join Button */}
                    <button
                        className="px-3 py-1.5 md:px-6 md:py-2 rounded-full font-normal hover:opacity-90 transition-opacity duration-300 text-white text-sm md:text-[20px]"
                        style={{ backgroundColor: '#84298E', fontFamily: 'var(--font-poppins)' }}
                    >
                        <span className="">Join the Movement</span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;