import { motion } from "framer-motion";

export const Reveal = ({ children, width = "fit-content", classes = "" }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }} // Animates only once when 20% visible
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ width }}
            className={classes}
        >
            {children}
        </motion.div>
    );
};
