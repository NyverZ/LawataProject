import { motion } from "framer-motion";

export const ClosingSection = () => (
  <motion.section
    className="relative overflow-hidden bg-gradient-to-b from-background via-background to-slate-950/60 py-28 text-center md:py-32"
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.35 }}
    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
  >
    <div className="absolute inset-x-10 bottom-0 h-32 rounded-full bg-sky-300/10 blur-3xl" />
    <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
      Temukan ketenangan, keindahan alam, dan momen berharga di pantai yang selalu meninggalkan kesan mendalam.
    </p>
  </motion.section>
);
