import { motion } from "framer-motion";
import { Landmark, ShipWheel, TreePalm } from "lucide-react";

const introHighlights = [
  {
    title: "Sejak 1961",
    desc: "Salah satu objek wisata pantai tertua yang terus hidup di tengah perkembangan Kota Bima.",
    icon: Landmark,
  },
  {
    title: "Pintu Laut Kota Bima",
    desc: "Berakar dari ungkapan Lawang Ita, simbol sambutan hangat untuk pendatang lewat jalur laut.",
    icon: ShipWheel,
  },
  {
    title: "Ikon Wisata Lokal",
    desc: "Memadukan nilai sejarah, budaya, dan panorama alam yang tetap relevan lintas generasi.",
    icon: TreePalm,
  },
];

export const IntroSection = () => (
  <motion.section
    className="bg-background py-24 text-foreground md:py-32"
    initial={{ opacity: 0, y: 38 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
  >
    <div className="container mx-auto space-y-14 px-6">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-5 font-serif text-3xl font-semibold text-foreground md:text-4xl">
          Sejarah Tentang Lawata
        </h2>
        <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
          Pantai Lawata dikenal sebagai salah satu destinasi tertua di Kota Bima
          sejak tahun 1961. Berada di jalur utama masuk kota dari laut, kawasan
          ini tumbuh dari simbol sambutan "Lawang Ita" menjadi ikon wisata
          pesisir yang menghubungkan sejarah, budaya, dan keindahan alam.
        </p>
      </div>

      <motion.div
        className="grid gap-5 md:grid-cols-3"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
      >
        {introHighlights.map((item) => (
          <motion.article
            key={item.title}
            className="rounded-2xl border border-border/70 bg-linear-to-br from-white/70 to-sky-50/45 p-6 shadow-sm shadow-slate-900/5 backdrop-blur-sm dark:from-slate-900/55 dark:to-slate-800/25"
            variants={{
              hidden: { opacity: 0, y: 22 },
              show: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
          >
            <div className="mb-4 inline-flex rounded-xl border border-primary/25 bg-primary/10 p-2.5 text-primary">
              <item.icon className="size-[18px]" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
          </motion.article>
        ))}
      </motion.div>
    </div>
  </motion.section>
);
