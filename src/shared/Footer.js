import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black text-white py-6">
            <div className="container mx-auto text-center">
                <p className="text-white Poppins-light">
                    © {currentYear} All Rights Reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer
