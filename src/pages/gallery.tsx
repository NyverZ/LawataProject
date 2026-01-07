import g1 from "@/assets/image/g1.webp";
import g2 from "@/assets/image/g2.webp";
import g3 from "@/assets/image/g3.webp";

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
  return (
    <section className="min-h-screen py-20 bg-background text-foreground reveal delay-200">
      <div className="container mx-auto px-6 space-y-16">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center reveal">Gallery</h1>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {galleryData.map((item, index) => (
            <div
              key={index}
              className="reveal space-y-3"
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Closing */}
        <div className="text-center reveal">
          <p className="text-muted-foreground">
            Setiap sudut Pantai Lawata memiliki cerita, dari pagi yang tenang
            hingga senja yang hangat 🌊
          </p>
        </div>
      </div>
    </section>
  );
}
