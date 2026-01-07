import HeroSectionBg from "@/assets/image/HeroSectionBg.webp";
import { Button } from "./ui/button";
import { ArrowRightIcon } from "lucide-react";
import { Link } from "react-router-dom";

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
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6">
        <div className="max-w-xl text-white space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Pantai Lawata
          </h1>

          <p className="text-white/80 text-lg">
            Pantai Lawata merupakan salah satu destinasi wisata bahari unggulan
            yang terletak di Kota Bima, Provinsi Nusa Tenggara Barat (NTB).
            Pantai ini berada tidak jauh dari pusat kota, sehingga mudah diakses
            oleh masyarakat lokal maupun wisatawan dari luar daerah.
            
          </p>
          <Link to="/about" className="w-fit">
            <Button size="lg" variant="default">
              Get Visit
              <ArrowRightIcon className="size-4" />
            </Button>
          </Link>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl">
            <div className="backdrop-blur bg-white/10 p-4 rounded-xl text-white">
              🌊 <p className="mt-2 text-sm">Pantai tenang & alami</p>
            </div>
            <div className="backdrop-blur bg-white/10 p-4 rounded-xl text-white">
              🌅 <p className="mt-2 text-sm">Spot sunset favorit</p>
            </div>
            <div className="backdrop-blur bg-white/10 p-4 rounded-xl text-white">
              📍 <p className="mt-2 text-sm"> Dekat pusat kota</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
