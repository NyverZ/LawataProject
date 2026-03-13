import { Facebook, Instagram, Youtube } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  {
    label: "Instagram",
    href: "#",
    icon: Instagram,
  },
  {
    label: "Facebook",
    href: "#",
    icon: Facebook,
  },
  {
    label: "YouTube",
    href: "#",
    icon: Youtube,
  },
];

export const Footer = () => {
  return (
    <footer className="border-t border-sky-200/15 bg-linear-to-br from-[#031a34] via-[#0a2f58] to-[#05203e] text-slate-100">
      <div className="container mx-auto space-y-7 px-6 py-14 text-center">
        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-serif text-2xl font-semibold">Pantai Lawata</h2>
          <p className="mx-auto max-w-md text-sm leading-relaxed text-slate-200/80">
            Tempat terbaik menikmati laut, angin sepoi, dan senja tenang di
            Kota Bima.
          </p>
        </motion.div>

        <div className="flex justify-center gap-4">
          {socialLinks.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              aria-label={item.label}
              className="inline-flex rounded-full border border-sky-100/20 bg-white/8 p-3 text-slate-100 backdrop-blur-md"
              whileHover={{ y: -5, scale: 1.06, rotate: -3 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <item.icon size={19} />
            </motion.a>
          ))}
        </div>

        <p className="text-xs text-slate-200/70">
          � {new Date().getFullYear()} Pantai Lawata � Santai, alami, dan
          berkesan.
        </p>
      </div>
    </footer>
  );
};
