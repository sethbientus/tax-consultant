import { motion } from "framer-motion";
import { SendHorizonal, CheckCircle2 } from "lucide-react";
import mkbImage from "../assets/mkb_image.jpeg";
import logoImage from "../assets/logo.jpeg";

const About = () => {
    return (
        <div className="pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="grid lg:grid-cols-2 gap-16 items-center mb-16"
                >
                    <div>
                        <h2 className="text-blue-600 font-bold tracking-widest text-md mb-4">
                            About Makabe Improvement Supply
                        </h2>
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                            Expertise Built Over Decades of Tax Consulting
                            Excellence
                        </h1>
                        <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                            <span className="font-bold">
                                MAKABE IMPROVEMENT SUPPLY LTD
                            </span>{" "}
                            is a limited liability consulting firm registered in
                            Rwanda under Law N° 007/2021 of 05/02/2021,
                            Commercial Registration Number 150714719 of November
                            11st, 2025.
                        </p>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            This company has capability to provide different
                            services which are:{" "}
                            <span className="font-bold">
                                Management Consultants, Business Consultancy,
                                Project Management, Financial Consultants, Tax
                                advisory Consultants, Debt Collection services,
                                Cleaning Services and General Supply branding
                                and other related services
                            </span>
                        </p>
                    </div>
                    <div className="relative">
                        <img
                            src={mkbImage}
                            className="rounded-2xl shadow-xl"
                            alt="Office Meeting"
                        />
                        <div className="absolute -bottom-6 lg:-left-6 bg-white p-6 rounded-2xl shadow-xl z-20 flex items-center gap-4 border border-slate-100">
                            <div className="bg-green-100 p-3 rounded-full text-green-600">
                                <CheckCircle2 size={24} />
                            </div>
                            <div>
                                <img
                                    src={logoImage}
                                    className="rounded-2xl shadow-xl w-20 h-15"
                                    alt="Makabe"
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <div className="grid lg:cols-2 md:grid-cols-2 gap-8 mb-8">
                        <div className="max-w-7xl">
                            <h3 className="text-4xl font-bold text-blue-600 mb-4">
                                Our Mission
                            </h3>
                            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                                We aim to build a strong and profitable maid
                                service by delivering to our customers a
                                professional service that is always fair,
                                efficient, helpful, and responsive.
                            </p>
                        </div>
                        <div className="max-w-7xl">
                            <h3 className="text-4xl font-bold text-blue-600 mb-4">
                                Our Vision
                            </h3>
                            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                                To describe the best possible end result.in
                                reality (visualize something more than what you
                                consider to be the best possible outcome)
                            </p>
                        </div>
                    </div>

                    <div className="grid lg:cols-2 md:grid-cols-2 gap-8 mb-8">
                        <div className="max-w-7xl">
                            <h3 className="text-4xl font-bold text-blue-600 mb-4">
                                Our Objectives
                            </h3>
                            <ul className="space-y-4 text-md">
                                <li className="mt-4">
                                    <p className="flex gap-2 items-start pt-4">
                                        <SendHorizonal
                                            className="text-black shrink-0 mt-1"
                                            size={16}
                                        />
                                        <span className="mt-0">
                                            To grow concern for innovative and
                                            helpful work
                                        </span>
                                    </p>
                                </li>
                                <li>
                                    <p className="flex gap-2 items-start">
                                        <SendHorizonal
                                            className="text-black shrink-0 mt-1"
                                            size={16}
                                        />
                                        <span className="mt-0">
                                            To reduce number of unemployment
                                        </span>
                                    </p>
                                </li>
                                <li>
                                    <p className="flex gap-2 items-start">
                                        <SendHorizonal
                                            className="text-black shrink-0 mt-1"
                                            size={16}
                                        />
                                        <span className="mt-0">
                                            To provide the maximum quality
                                            merchandises and Services
                                        </span>
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="max-w-7xl">
                            <h3 className="text-4xl font-bold text-blue-600 mb-4">
                                Our Values
                            </h3>
                            <p className="text-lg text-slate-600 mb-4 max-w-lg leading-relaxed">
                                <span className="font-bold">Customers:</span> We
                                are committed to building the loyalty of our
                                customers and ensuring that the satisfaction of
                                their needs is central to everything we do.
                            </p>
                            <p className="text-lg text-slate-600 mb-4 max-w-lg leading-relaxed">
                                <span className="font-bold">Employees:</span> We
                                are committed to creating an environment where
                                we can take pride in ourselves, our colleagues
                                and our company.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
