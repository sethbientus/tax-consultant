import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import { motion, useScroll } from "framer-motion";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Services from "./components/Services";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

function App() {
    const { scrollYProgress } = useScroll();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 2000);
    }, []);

    if (loading) {
        return (
            <div className="h-screen flex items-center justify-center bg-black text-white">
                <motion.div
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 1.2 }}
                >
                    Loading...
                </motion.div>
            </div>
        );
    }
    return (
        <>
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-[60] origin-left"
                style={{ scaleX: scrollYProgress }}
            />
            <Toaster position="top-right" />
            <Router>
                <div className="min-h-screen bg-white">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                    <Footer />
                </div>
            </Router>
        </>
    );
}

export default App;
