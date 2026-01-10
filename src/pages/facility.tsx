import {
  Coffee,
  HousePlus,
  HouseHeart,
  BadgeDollarSign,
  Dice6,
  Info,
  CircleParking,
} from "lucide-react";
import Gazebo from "@/assets/image/Gazabo.webp";
import Mushola from "@/assets/image/Mushola.webp";
import Information from "@/assets/image/Information.webp";
import Umkm from "@/assets/image/UMKM.webp";
import AreaParkir from "@/assets/image/AreaParkir.webp";
import Caffe from "@/assets/image/Caffe.webp";
import Wahana from "@/assets/image/Wahana.webp";

export default function Facility() {
  return (
    <section className="min-h-screen bg-background text-foreground reveal delay-200">
      <div className="container mx-auto px-6 py-20 max-w-6xl space-y-20">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Facility</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Pantai Lawata menawarkan berbagai aktivitas santai yang dapat
            dinikmati oleh semua kalangan, dari pagi hingga senja.
          </p>
        </div>

        {/* Activity List */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Card */}
          <div
            className="p-6 rounded-2xl border border-border bg-background 
                space-y-4 flex flex-col items-center text-center"
          >
            <HousePlus className="text-primary" />
            <h3 className="text-xl font-semibold">Gazebo</h3>
            <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
              <img
                src={Gazebo}
                alt="gazebo"
                className="w-full h-auto object-cover"
              />
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Gazebo di area pantai menjadi tempat ideal untuk beristirahat,
              berkumpul bersama keluarga, dan menikmati pemandangan laut dengan
              suasana yang nyaman dan teduh.
            </p>
          </div>

          <div
            className="p-6 rounded-2xl border border-border bg-background 
                space-y-4 flex flex-col items-center text-center"
          >
            <HouseHeart className="text-primary" />
            <h3 className="text-xl font-semibold">Mushola</h3>
            <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
              <img
                src={Mushola}
                alt="mushola"
                className="w-full h-auto object-cover"
              />
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Mushola tersedia bagi pengunjung untuk beribadah dengan tenang,
              memberikan kenyamanan spiritual di tengah suasana pantai yang
              damai.
            </p>
          </div>

          <div
            className="p-6 rounded-2xl border border-border bg-background 
                space-y-4 flex flex-col items-center text-center"
          >
            <Info className="text-primary" />
            <h3 className="text-xl font-semibold">Pusat Informasi Wisata</h3>
            <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
              <img
                src={Information}
                alt="info"
                className="w-full h-auto object-cover"
              />
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Pusat informasi wisata membantu pengunjung mendapatkan panduan,
              informasi fasilitas, serta rekomendasi aktivitas selama berada di
              kawasan Pantai Lawata.
            </p>
          </div>

          <div
            className="p-6 rounded-2xl border border-border bg-background 
                space-y-4 flex flex-col items-center text-center"
          >
            <BadgeDollarSign className="text-primary" />
            <h3 className="text-xl font-semibold">Area UMKM</h3>
            <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
              <img
                src={Umkm}
                alt="umkm"
                className="w-full h-auto object-cover"
              />
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Area UMKM menghadirkan beragam kuliner dan produk lokal yang dapat
              dinikmati sambil bersantai, mendukung ekonomi masyarakat sekitar
              pantai.
            </p>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {/* Card */}
          <div
            className="p-6 rounded-2xl border border-border bg-background 
                space-y-4 flex flex-col items-center text-center"
          >
            <CircleParking className="text-primary" />
            <h3 className="text-xl font-semibold">Area Parkir</h3>
            <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
              <img
                src={AreaParkir}
                alt="areparkir"
                className="w-full h-auto object-cover"
              />
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Area parkir yang luas dan tertata memudahkan pengunjung untuk
              mengakses pantai dengan aman dan nyaman, baik kendaraan roda dua
              maupun roda empat.
            </p>
          </div>

          <div
            className="p-6 rounded-2xl border border-border bg-background 
                space-y-4 flex flex-col items-center text-center"
          >
            <Coffee className="text-primary" />
            <h3 className="text-xl font-semibold">Cafe</h3>
            <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
              <img
                src={Caffe}
                alt="caffe"
                className="w-full h-auto object-cover"
              />
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Caffe di sekitar pantai menawarkan tempat santai untuk menikmati
              minuman dan hidangan ringan sambil merasakan angin laut dan
              suasana pesisir yang menenangkan.
            </p>
          </div>
          <div
            className="p-6 rounded-2xl border border-border bg-background 
                space-y-4 flex flex-col items-center text-center"
          >
            <Dice6 className="text-primary" />
            <h3 className="text-xl font-semibold">Wahana Permainan</h3>
            <div className="overflow-hidden rounded-2xl border border-border shadow-lg w-full">
              <img
                src={Wahana}
                alt="wahana"
                className="w-full h-auto object-cover"
              />
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Wahana permainan menjadi pilihan hiburan bagi anak-anak maupun
              dewasa, menambah keseruan liburan dengan aktivitas ringan di
              kawasan pantai.
            </p>
          </div>
        </div>

        {/* Closing */}
        <div className="text-center">
          <p className="text-muted-foreground">
            Setiap aktivitas di Pantai Lawata adalah tentang menikmati waktu
            dengan cara sederhana 🌊
          </p>
        </div>
      </div>
    </section>
  );
}
