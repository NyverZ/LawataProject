import { motion } from "framer-motion";
import { CarFront, CircleDollarSign, Ticket, Users } from "lucide-react";

const ticketItems = [
  {
    title: "Orang Dewasa",
    price: "Rp3.000",
    icon: Users,
  },
  {
    title: "Anak-Anak",
    price: "Rp2.000",
    icon: Users,
  },
  {
    title: "Kendaraan Roda 2",
    price: "Rp2.000",
    icon: CarFront,
  },
  {
    title: "Kendaraan Roda 4",
    price: "Rp4.000",
    icon: CarFront,
  },
  {
    title: "Sewa Tempat",
    price: "Rp500.000",
    icon: CircleDollarSign,
  },
];

export const ExperienceSection = () => (
  <section className="bg-background py-24 md:py-32">
    <div className="container mx-auto px-6">
      <motion.div
        className="mx-auto mb-12 max-w-2xl text-center"
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-4 py-1 text-xs font-semibold tracking-[0.2em] text-primary uppercase">
          <Ticket className="size-3.5" />
          Informasi Tiket
        </p>
        <h2 className="mb-4 font-serif text-3xl font-semibold md:text-4xl">
          Tiket Masuk Pantai Lawata
        </h2>
        <p className="text-muted-foreground">
          Harga akses wisata yang ramah untuk keluarga dengan fasilitas wisata
          pesisir yang terus berkembang.
        </p>
      </motion.div>

      <motion.div
        className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {ticketItems.map((item) => (
          <motion.article
            key={item.title}
            className="group rounded-2xl border border-border/70 bg-card p-6 shadow-sm shadow-slate-900/5 transition-all duration-500 hover:border-primary/30 hover:shadow-[0_20px_35px_-24px_rgba(14,116,144,0.55)]"
            variants={{
              hidden: { opacity: 0, y: 22 },
              show: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
            whileHover={{ y: -8 }}
          >
            <div className="mb-5 flex items-center justify-between">
              <span className="inline-flex rounded-xl border border-primary/25 bg-primary/8 p-2 text-primary">
                <item.icon className="size-4" />
              </span>
              <span className="text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">
                Lawata
              </span>
            </div>
            <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
            <p className="text-xl font-semibold text-primary">{item.price}</p>
          </motion.article>
        ))}
      </motion.div>
    </div>
  </section>
);
