import { Instagram, Facebook, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t bg-background text-foreground">
      <div className="container mx-auto px-6 py-12 text-center space-y-6">

        {/* Brand */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">
            Pantai Lawata
          </h2>
          <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
            Tempat terbaik menikmati laut, angin sepoi,
            dan senja tenang di Kota Bima.
          </p>
        </div>

        {/* Social Media */}
        <div className="flex justify-center gap-6">
          <a
            href="#"
            className="text-muted-foreground hover:text-foreground transition"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-foreground transition"
            aria-label="Facebook"
          >
            <Facebook size={20} />
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-foreground transition"
            aria-label="YouTube"
          >
            <Youtube size={20} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Pantai Lawata · Santai, alami, dan apa adanya
        </p>
      </div>
    </footer>
  );
};
