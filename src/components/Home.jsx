import Hero from "./Hero";
import ServicesSection from "./ServicesSection";

const Home = () => (
    <>
        <Hero />
        <div className="text-center mb-4 mt-8">
            <h2 className="text-blue-600 font-bold tracking-widest text-lg">
                Our Partners
            </h2>
        </div>
        <section className="py-6 bg-white border-y border-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale">
                <span className="text-2xl font-black">Partner 1</span>
                <span className="text-2xl font-black">Partner 2</span>
                <span className="text-2xl font-black">Partner 3</span>
                <span className="text-2xl font-black">Partner 4</span>
            </div>
        </section>
        <ServicesSection />
    </>
);

export default Home;
