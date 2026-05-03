import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import logoImage from "../assets/logo.jpeg";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "About Us", path: "/about" },
        { name: "Contact Us", path: "/contact" },
    ];

    return (
        <nav className="fixed w-full bg-white/90 backdrop-blur-md shadow-sm z-50 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <Link
                        to="/"
                        className="flex items-center gap-2 text-slate-900 font-bold text-2xl tracking-tight"
                    >
                        <div className="p-1 rounded-lg text-white flex items-center gap-1">
                            <img
                                src={logoImage}
                                className="rounded-2xl shadow-xl w-25 h-18"
                                alt="Makabe"
                            />
                        </div>
                    </Link>

                    <div className="hidden md:flex items-center space-x-10 grow justify-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-sm font-bold transition-colors duration-200 ${
                                    location.pathname === link.path
                                        ? "text-blue-600"
                                        : "text-slate-600 hover:text-blue-600"
                                }`}
                            >
                                <div className="flex flex-col">
                                    <>{link.name}</>
                                    <span
                                        className={`h-1 w-full ${
                                            location.pathname === link.path
                                                ? "bg-blue-600"
                                                : "#f8fafc"
                                        }`}
                                    ></span>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div
                        className="md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? (
                            <X className="text-slate-900 cursor-pointer" />
                        ) : (
                            <Menu className="text-slate-900 cursor-pointer" />
                        )}
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t overflow-hidden"
                    >
                        <div className="px-4 py-6 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`block text-center text-sm font-mediu ${
                                        location.pathname === link.path
                                            ? "text-blue-600"
                                            : "text-slate-600 hover:text-blue-600"
                                    }`}
                                >
                                    <div className="flex flex-col items-center">
                                        <>{link.name}</>
                                        <span
                                            className={`h-1 w-15 ${
                                                location.pathname === link.path
                                                    ? "bg-blue-600"
                                                    : "bg-white"
                                            }`}
                                        ></span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
