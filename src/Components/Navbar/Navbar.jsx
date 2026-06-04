import React, { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import { WalletCards } from "lucide-react";

const Navbar = ({ adminLogin, adminButton, card, cardShow }) => {
    const [isOpen, setOpen] = useState(false);

    window.addEventListener("scroll", () => {
        setOpen(false);
    });

    return (
        <>
            {/* Navbar */}
            <div className="fixed top-0 left-0 w-full z-50 bg-gray-800 shadow-md px-1 sm:px-0">
                <nav className="flex items-center justify-between py-3 container mx-auto">
                    <img
                        className="w-[200px]"
                        src="/ChatGPT-Image-Mar-20,-2026,-02_57_57-PM.png"
                        alt="Logo"
                    />

                    {/* Hamburger Icon */}
                    <div className="md:hidden flex items-center justify-center">
                        <div className="relative z-50">
                            <span className="absolute -top-2 -right-1 z-20 text-success font-semibold text-[14px]">
                                {card.length}
                            </span>
                            <button onClick={() => cardShow()}className="btn rounded-full w-8 h-8 p-1">
                                <WalletCards />
                            </button>
                        </div>
                        <Hamburger
                            size={25}
                            toggled={isOpen}
                            toggle={setOpen}
                        />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-6 text-white">
                        <ul className="flex items-center space-x-6">
                            <li>
                                <a
                                    onClick={(e) => {
                                        e.preventDefault();
                                        adminButton(false);
                                        setOpen(false);
                                    }}
                                    href="#home"
                                    className="hover:text-green-400 transition-colors"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setOpen(false);
                                    }}
                                    href="contact"
                                    className="hover:text-green-400 transition-colors"
                                >
                                    Contact
                                </a>
                            </li>
                            {adminLogin && (
                                <li>
                                    <a
                                        onClick={(e) => {
                                            e.preventDefault();
                                            adminButton(true);
                                            setOpen(false);
                                        }}
                                        href="admin"
                                        className="hover:text-green-400 transition-colors"
                                    >
                                        Admin Panel
                                    </a>
                                </li>
                            )}
                        </ul>
                        <div className="relative z-50">
                            <span className="absolute -top-2 -right-1 z-20 text-success font-semibold text-[14px]">
                                {card.length}
                            </span>
                            <button onClick={() => cardShow()} className="btn rounded-full w-8 h-8 p-2">
                                <WalletCards />
                            </button>
                        </div>
                        <button className="btn btn-success">
                            <a href="">Sign Out</a>
                        </button>
                    </div>
                </nav>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 z-30 "
                        onClick={() => setOpen(false)}
                    ></div>
                    <div className="fixed top-[64px] left-0 w-full bg-gray-800 z-50 shadow-lg animate-slide-down">
                        <ul className="flex flex-col items-center py-6 space-y-4 text-white">
                            <li>
                                <a
                                    onClick={(e) => {
                                        e.preventDefault();
                                        adminButton(false);
                                    }}
                                    href="home"
                                    className="hover:text-green-400 transition-colors text-lg"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    onClick={(e) => e.preventDefault()}
                                    href="contact"
                                    className="hover:text-green-400 transition-colors text-lg"
                                >
                                    Contact Us
                                </a>
                            </li>
                            {adminLogin && (
                                <li>
                                    <a
                                        onClick={(e) => {
                                            e.preventDefault();
                                            adminButton(true);
                                        }}
                                        href="admin"
                                        className="hover:text-green-400 transition-colors text-lg"
                                    >
                                        Admin Panel
                                    </a>
                                </li>
                            )}
                            <button className="btn btn-success mt-2">
                                <a href="">Sign Out</a>
                            </button>
                        </ul>
                    </div>
                </>
            )}

            {/* Optional: Add animation in Tailwind */}
            <style>
                {`
                    @keyframes slide-down {
                        0% { transform: translateY(-20px); opacity: 0; }
                        100% { transform: translateY(0); opacity: 1; }
                    }
                    .animate-slide-down {
                        animation: slide-down 0.3s ease-out forwards;
                    }
                `}
            </style>
        </>
    );
};

export default Navbar;
