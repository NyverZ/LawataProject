import HeroSectionBg from "@/assets/image/HeroSectionBg.webp";
import { Button } from "./ui/button";
import { ArrowRightIcon, MapPin, Sparkles, SunMedium, Waves } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const heroHighlights = [
  {
    title: "Pantai tenang & alami",
    icon: Waves,
    delay: 0.15,
  },
  {
    title: "Spot sunset favorit",
    icon: SunMedium,
    delay: 0.25,
  },
  {
    title: "Dekat pusat kota",
    icon: MapPin,
    delay: 0.35,
  },
];

export const HeroSection = () => {
  return (
    <section className="relative isolate flex min-h-[88vh] items-end overflow-hidden py-24 md:items-center md:py-32">
      <div className="absolute inset-0 -z-20">
        <motion.img
          src={HeroSectionBg}
          alt="Pantai Lawata"
          className="h-full w-full object-cover scale-[1.12]"
          animate={{ scale: [1.12, 1.18, 1.12] }}
          transition={{ duration: 28, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-slate-950/80 via-sky-950/45 to-orange-500/35" />
        <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/55" />
      </div>

      <motion.div
        className="absolute -right-20 top-16 -z-10 h-64 w-64 rounded-full bg-orange-300/35 blur-3xl"
        animate={{ x: [0, -16, 0], y: [0, 18, 0], opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-8 -z-10 h-40 w-40 rounded-full bg-sky-200/25 blur-3xl"
        animate={{ y: [0, -10, 0], opacity: [0.2, 0.45, 0.2] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-2xl space-y-6 text-white md:space-y-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.45 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.2,
              },
            },
          }}
        >
          <motion.p
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-1.5 text-xs tracking-[0.22em] text-white/90 uppercase backdrop-blur-lg"
            variants={{
              hidden: { opacity: 0, y: 18 },
              show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
            }}
          >
            <Sparkles className="size-3.5" />
            Destinasi Wisata Bima
          </motion.p>
          <motion.h1
            className="font-serif text-4xl leading-tight font-semibold md:text-6xl"
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
            }}
          >
            Pesona Pantai yang
            <span className="block bg-linear-to-r from-sky-200 via-amber-200 to-orange-200 bg-clip-text text-transparent">
              Menenangkan Jiwa
            </span>
          </motion.h1>

          <motion.p
            className="max-w-xl text-base leading-relaxed text-white/85 md:text-lg"
            variants={{
              hidden: { opacity: 0, y: 24 },
              show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
            }}
          >
            Jelajahi pesona laut biru, pasir bersih, dan suasana alami yang
            cocok untuk liburan keluarga, bersantai, atau mengabadikan momen
            terbaik di Pantai Lawata.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 24 },
              show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
            }}
          >
            <Link to="/about" className="w-fit">
              <Button
                size="lg"
                variant="default"
                className="group rounded-full bg-white/90 px-6 text-slate-900 shadow-lg shadow-sky-900/20 transition-all duration-500 hover:-translate-y-1 hover:bg-white"
              >
                Get Visit
                <ArrowRightIcon className="size-4 transition-transform duration-500 group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>

          <motion.div
            className="mt-10 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.12,
                  delayChildren: 0.25,
                },
              },
            }}
          >
            {heroHighlights.map((item) => (
              <motion.div
                key={item.title}
                className="group rounded-2xl border border-white/25 bg-white/12 p-4 text-white shadow-lg shadow-black/20 backdrop-blur-xl"
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                      delay: item.delay,
                    },
                  },
                }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 22px 36px -20px rgba(56, 189, 248, 0.65)",
                }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div
                  className="mb-2 inline-flex rounded-xl border border-white/30 bg-white/20 p-2"
                  animate={{ y: [0, -3, 0] }}
                  transition={{
                    duration: 3.4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <item.icon className="size-4 text-sky-100" />
                </motion.div>
                <p className="text-sm leading-relaxed text-white/90">{item.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
