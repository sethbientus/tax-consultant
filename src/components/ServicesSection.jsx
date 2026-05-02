import { Shield, BarChart3, Landmark, Calculator } from "lucide-react";
import { Reveal } from "./Reveal";

const services = [
    {
        title: "Tax Strategy",
        desc: "Long-term planning to legally minimize your tax burden and maximize profit retention.",
        icon: <BarChart3 size={32} />,
    },
    {
        title: "Audit Defense",
        desc: "Expert representation before the IRS to ensure your rights and assets are protected.",
        icon: <Shield size={32} />,
    },
    {
        title: "Business Consultancy",
        desc: "Advising on entity formation for optimal fiscal efficiency, market analysis and research.",
        icon: <Landmark size={32} />,
    },
    {
        title: "Full Bookkeeping",
        desc: "Immaculate financial record-keeping that keeps your business audit-ready 24/7.",
        icon: <Calculator size={32} />,
    },
];

const ServicesSection = () => {
    return (
        <section className="py-8 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-blue-600 font-bold tracking-widest text-lg mb-4">
                        Our Expertise
                    </h2>
                    <h3 className="text-lg font-bold text-slate-900">
                        Comprehensive Solutions
                    </h3>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="flex flex-col h-full bg-slate-50 rounded-2xl"
                        >
                            <Reveal classes="flex-grow">
                                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                                    <div className="flex items-center justify-center gap-2 mb-3">
                                        <div className="text-blue-600">
                                            {service.icon}
                                        </div>
                                        <h4 className="text-xl font-bold text-slate-900">
                                            {service.title}
                                        </h4>
                                    </div>
                                    <p className="text-slate-600 text-sm">
                                        {service.desc}
                                    </p>
                                </div>
                            </Reveal>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
