import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="order-2 lg:order-1"
                >
                    <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                        </span>
                        Trusted by 500+ Corporations
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
                        Strategic Tax <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                            Solutions
                        </span>{" "}
                        for Growth.
                    </h1>
                    <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                        Maximize your returns and minimize liabilities with our
                        data-driven tax strategies. Makabe Improvement Supply
                        tax consulting designed for the modern enterprise.
                    </p>
                    <Link
                        to="services"
                        className="cursor-pointer bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl font-bold hover:bg-blue-600 hover:text-white transition shadow-sm"
                    >
                        Our Services
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative order-1 lg:order-2"
                >
                    <img
                        src="/mkb_image.jpeg?auto=format&fit=crop&q=80&w=900"
                        alt="Tax Professional"
                        className="rounded-3xl shadow-2xl z-10 relative"
                    />
                    <div className="absolute -bottom-6 lg:-left-6 bg-white p-6 rounded-2xl shadow-xl z-20 flex items-center gap-4 border border-slate-100">
                        <div className="bg-green-100 p-3 rounded-full text-green-600">
                            <CheckCircle2 size={24} />
                        </div>
                        <div>
                            <img
                                src="/logo.jpeg"
                                className="rounded-2xl shadow-xl w-20 h-15"
                                alt="Makabe"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
