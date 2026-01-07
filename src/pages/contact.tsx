import { useState } from "react";
import { Mail, MapPin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneNumber = "6285333900962"; // GANTI dengan nomor WA lo
    const text = `Halo admin Pantai Lawata ,Nama: ${name} Email: ${email} Pesan: ${message}
    `;

    const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      text
    )}`;

    window.open(waUrl, "_blank");
  };

  return (
    <section className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-6 py-20 max-w-5xl">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl font-bold">Hubungi Kami</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Mau tanya, kasih saran, atau sekadar menyapa? Tinggal kirim, nanti
            lanjut via WhatsApp.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Info */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Informasi Kontak</h2>

            <div className="flex items-center gap-4 text-muted-foreground">
              <MapPin size={20} />
              <span>Kota Bima, NTB</span>
            </div>

            <div className="flex items-center gap-4 text-muted-foreground">
              <Mail size={20} />
              <span>info@pantailawata.id</span>
            </div>

            <div className="flex items-center gap-4 text-muted-foreground">
              <Instagram size={20} />
              <span>@pantailawata</span>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed pt-4">
              Balasan biasanya santai, tapi kami usahakan cepat 😉
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Nama</label>
              <Input
                required
                placeholder="Nama kamu"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <Input
                required
                type="email"
                placeholder="email@contoh.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Pesan</label>
              <Textarea
                required
                rows={5}
                placeholder="Tulis pesanmu di sini..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <Button className="w-full" variant="default" type="submit">
              Kirim via WhatsApp
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
