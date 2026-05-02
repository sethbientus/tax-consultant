import { Mail, MapPin, MessageCircle, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
    <footer className="bg-slate-900 text-slate-400 py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-12 border-b border-slate-800 pb-12 mb-12">
            <div className="col-span-1 md:col-span-2">
                <h3 className="text-white text-2xl font-bold mb-6">
                    MAKABE
                    <span className="text-blue-500 ms-2">
                        Improvement Supply
                    </span>
                </h3>
                <p className="max-w-xs leading-relaxed">
                    The premier choice for corporate and individual tax
                    consulting. Providing clarity in a complex financial world.
                    We are committed to building the loyalty of our customers
                    and ensuring that the satisfaction of their needs is central
                    to everything we do
                </p>
            </div>
            <div>
                <h4 className="text-white font-bold mb-6 text-sm tracking-widest">
                    Quick Links
                </h4>
                <ul className="space-y-4 text-sm">
                    <li>
                        <a href="/" className="hover:text-white transition">
                            Home
                        </a>
                    </li>
                    <li>
                        <Link
                            to="/services"
                            className="hover:text-white transition"
                        >
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            className="hover:text-white transition"
                        >
                            About Us
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <h4 className="text-white font-bold mb-6 text-md tracking-widest">
                    Address
                </h4>
                <ul className="space-y-4 text-sm">
                    <li>
                        <p className="flex gap-2 items-start">
                            <MapPin
                                className="text-white shrink-0 mt-1"
                                size={14}
                            />
                            <span className="mt-0">
                                MAKABE IMPROVEMENT SUPPLY LTD offices are
                                located at Kigali City, Nyarugenge District,
                                Nyarugenge Sector, Kiyovu Cell near Inkuru Nziza
                                Church KN 83
                            </span>
                        </p>
                    </li>
                    <li>
                        <p className="flex gap-2 items-start">
                            <PhoneCall
                                className="text-white shrink-0 mt-1"
                                size={14}
                            />
                            <span className="mt-0">+250 794 687 416</span>
                        </p>
                    </li>
                    <li>
                        <p className="flex gap-2 items-start">
                            <MessageCircle
                                className="text-white shrink-0 mt-1"
                                size={14}
                            />
                            <span className="mt-0">+250 727 197 226</span>
                        </p>
                    </li>
                    <li>
                        <p className="flex gap-2 items-start">
                            <Mail
                                className="text-white shrink-0 mt-1"
                                size={14}
                            />
                            <span className="mt-0">
                                makabeimprovement2025@gmail.com
                            </span>
                        </p>
                    </li>
                </ul>
            </div>
        </div>
        <div className="text-center text-xs">
            &copy; 2026 MAKABE Improvement Supply. All Rights Reserved.
        </div>
    </footer>
);
export default Footer;
