import Hero from "./Hero";
import ServicesSection from "./ServicesSection";
import bnrImage from "../assets/bnr.png";
import rdbImage from "../assets/rdb.png";
import rraImage from "../assets/rra.jpg";
import bbrandImage from "../assets/bbrand.jpg";
import ollyImage from "../assets/olly.jpg";

const Home = () => (
    <>
        <Hero />
        <div className="text-center mb-4 mt-8">
            <h2 className="text-blue-600 font-bold tracking-widest text-lg">
                Our Partners
            </h2>
        </div>
        <section className="py-6 bg-white border-y border-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale-25">
                <span className="text-2xl">
                    <img
                        src={bnrImage}
                        alt="National Bank of Rwanda"
                        className="rounded-3xl shadow-2xl z-10 relative w-36 h-32"
                    />
                </span>
                <span className="text-2xl font-black">
                    <img
                        src={rdbImage}
                        alt="Rwanda Development Board"
                        className="rounded-3xl shadow-2xl z-10 relative w-36 h-32"
                    />
                </span>
                <span className="text-2xl font-black">
                    <img
                        src={rraImage}
                        alt="Rwanda Revenue Authority"
                        className="rounded-3xl shadow-2xl z-10 relative w-40 h-32"
                    />
                </span>
                <span className="text-2xl font-black">
                    <img
                        src={bbrandImage}
                        alt="BBrand"
                        className="rounded-3xl shadow-2xl z-10 relative w-40 h-32"
                    />
                </span>
                <span className="text-2xl font-black">
                    <img
                        src={ollyImage}
                        alt="Olly Smart Creation"
                        className="rounded-3xl shadow-2xl z-10 relative w-40 h-32"
                    />
                </span>
            </div>
        </section>
        <ServicesSection />
    </>
);

export default Home;
