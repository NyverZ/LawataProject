import g1 from "@/assets/image/g1.webp";
import g2 from "@/assets/image/g2.webp";
import g3 from "@/assets/image/g3.webp";
import { AnimatePresence, motion } from "framer-motion";
import { Expand, X } from "lucide-react";
import { useEffect, useState } from "react";

const galleryData = [
  {
    image: g1,
    alt: "Area rekreasi Pantai Lawata",
    desc: "Area rekreasi di sekitar Pantai Lawata yang dilengkapi dengan fasilitas pendukung, cocok untuk bersantai bersama keluarga sambil menikmati suasana pesisir.",
  },
  {
    image: g2,
    alt: "Ikon Pantai Lawata saat senja",
    desc: "Ikon tulisan Pantai Lawata yang menjadi landmark utama dan spot favorit pengunjung, terutama saat sore hari menjelang matahari terbenam.",
  },
  {
    image: g3,
    alt: "Dermaga Pantai Lawata",
    desc: "Area dermaga Pantai Lawata yang sering digunakan untuk aktivitas santai di laut, menawarkan pemandangan air biru dan suasana wisata pesisir yang hidup.",
  },
];

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedIndex(null);
      }
    };

    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, []);

  const activeItem = selectedIndex !== null ? galleryData[selectedIndex] : null;

  return (
    <section className="min-h-screen bg-background py-24 text-foreground md:py-28">
      <div className="container mx-auto space-y-16 px-6">
        <motion.div
          className="space-y-4 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs font-semibold tracking-[0.24em] text-primary uppercase">
            Visual Journey
          </p>
          <h1 className="font-serif text-4xl font-semibold md:text-5xl">Gallery</h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Jelajahi momen terbaik Pantai Lawata dari sudut rekreasi, landmark,
            hingga suasana dermaga.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
        >
          {galleryData.map((item, index) => (
            <motion.article
              key={item.alt}
              className="space-y-3"
              variants={{
                hidden: { opacity: 0, y: 22 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              <button
                type="button"
                onClick={() => setSelectedIndex(index)}
                className="group relative w-full overflow-hidden rounded-3xl border border-border/70 text-left shadow-lg shadow-slate-900/10"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="h-[280px] w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent opacity-85 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute right-4 top-4 inline-flex rounded-full border border-white/30 bg-black/30 p-2 text-white backdrop-blur-sm transition duration-500 group-hover:scale-110">
                  <Expand className="size-4" />
                </div>
                <p className="absolute bottom-4 left-4 right-4 text-sm font-medium text-white">
                  {item.alt}
                </p>
              </button>

              <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </motion.article>
          ))}
        </motion.div>

        <div className="text-center">
          <p className="text-muted-foreground">
            Setiap sudut Pantai Lawata memiliki cerita, dari pagi yang tenang
            hingga senja yang hangat.
          </p>
        </div>
      </div>

      <AnimatePresence>
        {activeItem ? (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/82 p-5 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
          >
            <motion.div
              className="relative w-full max-w-5xl"
              initial={{ scale: 0.95, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 10 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedIndex(null)}
                className="absolute right-3 top-3 z-10 inline-flex rounded-full border border-white/25 bg-black/35 p-2 text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-black/55"
                aria-label="Close preview"
              >
                <X className="size-5" />
              </button>
              <img
                src={activeItem.image}
                alt={activeItem.alt}
                className="max-h-[82vh] w-full rounded-2xl object-cover"
              />
              <p className="mt-4 text-sm text-white/85">{activeItem.desc}</p>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
