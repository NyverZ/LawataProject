import HeroSectionBg from "@/assets/image/HeroSectionBg.webp";


export const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src={HeroSectionBg}
          alt="Pantai Lawata"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6">
        <div className="max-w-xl text-white space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Pantai Lawata
          </h1>

          <p className="text-white/80 text-lg">
            Ikon wisata pesisir Kota Bima dengan panorama laut, angin sepoi, dan
            suasana senja yang tenang.
          </p>
        </div>
      </div>
    </section>
  );
};
