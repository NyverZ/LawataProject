import { MapPin, Camera, Sun, Coffee } from "lucide-react";

export default function ActivityPage() {
  return (
    <section className="min-h-screen bg-background text-foreground reveal delay-200">
      <div className="container mx-auto px-6 py-20 max-w-6xl space-y-20">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Aktivitas</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Pantai Lawata menawarkan berbagai aktivitas santai yang dapat
            dinikmati oleh semua kalangan, dari pagi hingga senja.
          </p>
        </div>

        {/* Activity List */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Card */}
          <div className="p-6 rounded-2xl border border-border bg-background space-y-4">
            <Sun className="text-muted-foreground" />
            <h3 className="text-xl font-semibold">Menikmati Sunset</h3>
            <p className="text-muted-foreground leading-relaxed">
              Waktu terbaik berkunjung ke Pantai Lawata adalah sore hari.
              Pengunjung dapat menikmati matahari terbenam dengan suasana yang
              tenang dan angin laut yang sejuk.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-border bg-background space-y-4">
            <Camera className="text-muted-foreground" />
            <h3 className="text-xl font-semibold">Fotografi Alam</h3>
            <p className="text-muted-foreground leading-relaxed">
              Garis pantai, laut terbuka, dan cahaya alami menjadikan Pantai
              Lawata spot yang menarik untuk fotografi lanskap maupun foto
              santai.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-border bg-background space-y-4">
            <MapPin className="text-muted-foreground" />
            <h3 className="text-xl font-semibold">Jalan Santai</h3>
            <p className="text-muted-foreground leading-relaxed">
              Area sekitar pantai cocok untuk berjalan santai sambil menikmati
              suara ombak dan suasana pesisir yang alami.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-border bg-background space-y-4">
            <Coffee className="text-muted-foreground" />
            <h3 className="text-xl font-semibold">Bersantai</h3>
            <p className="text-muted-foreground leading-relaxed">
              Pantai Lawata sering menjadi tempat bersantai bersama teman atau
              keluarga, menikmati waktu tanpa terburu-buru.
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
