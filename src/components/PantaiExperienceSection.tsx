import HeroSectionBg from "@/assets/image/HeroSectionBg.webp";
import { motion, useScroll, useTransform } from "framer-motion";
import { Compass, GlassWater, Sunset, Waves } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const experiencePillars = [
  {
    icon: Waves,
    title: "Vibes Laut yang Tenang",
    desc: "Nikmati ritme ombak yang lembut untuk relaksasi setelah aktivitas harian.",
  },
  {
    icon: Sunset,
    title: "Sunset Cinematic",
    desc: "Langit sore dengan nuansa emas-oranye menjadi momen favorit para pengunjung.",
  },
  {
    icon: GlassWater,
    title: "Kuliner & Santai",
    desc: "Cicipi sajian lokal sambil menikmati panorama laut di area duduk terbuka.",
  },
];

export const PantaiExperienceSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [-20, 22]);
  const cardY = useTransform(scrollYProgress, [0, 1], [16, -16]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-background py-24 md:py-32">
      <motion.div
        className="absolute -right-20 top-20 h-56 w-56 rounded-full bg-sky-300/16 blur-3xl"
        style={{ y: cardY }}
      />
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            style={{ y: imageY }}
            className="relative"
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute -inset-4 rounded-4xl bg-linear-to-br from-sky-300/20 via-transparent to-orange-200/20 blur-xl" />
            <img
              src={HeroSectionBg}
              alt="Experience Pantai Lawata"
              className="relative h-105 w-full rounded-[1.8rem] object-cover shadow-[0_30px_60px_-35px_rgba(8,47,73,0.6)]"
            />
            <motion.div
              className="absolute bottom-6 left-6 max-w-xs rounded-2xl border border-white/25 bg-black/35 p-4 text-white backdrop-blur-xl"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <p className="mb-1 text-xs tracking-[0.18em] uppercase text-white/80">
                Golden Moment
              </p>
              <p className="text-sm leading-relaxed">
                Panorama senja Lawata menawarkan transisi warna laut dan langit
                yang dramatis setiap sore.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-xs tracking-[0.2em] text-primary uppercase">
              <Compass className="size-3.5" />
              Special Section
            </p>
            <h2 className="mb-5 font-serif text-3xl font-semibold leading-tight md:text-4xl">
              Experience Pantai Lawata
            </h2>
            <p className="mb-8 text-base leading-relaxed text-muted-foreground md:text-lg">
              Rasakan kombinasi suasana bahari, budaya lokal, dan relaksasi yang
              membuat Lawata selalu punya alasan untuk dikunjungi kembali.
            </p>

            <div className="space-y-4">
              {experiencePillars.map((pillar, index) => (
                <motion.article
                  key={pillar.title}
                  className="rounded-2xl border border-border/70 bg-card/80 p-4 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.08 * index,
                  }}
                >
                  <div className="mb-2 flex items-center gap-3">
                    <span className="inline-flex rounded-lg border border-primary/20 bg-primary/10 p-2 text-primary">
                      <pillar.icon className="size-4" />
                    </span>
                    <h3 className="text-base font-semibold">{pillar.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{pillar.desc}</p>
                </motion.article>
              ))}
            </div>

            <div className="mt-8">
              <Link to="/gallery">
                <Button className="rounded-full px-6">Lihat Galeri Lawata</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
