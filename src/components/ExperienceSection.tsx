export const ExperienceSection = () => (
  <section className="py-24 bg-muted/30 reveal delay-200">
    <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
      {[
        ["Suasana Tenang", "Cocok untuk bersantai"],
        ["Laut Terbuka", "Angin sepoi alami"],
        ["Akses Mudah", "Dekat pusat kota"],
      ].map(([title, desc]) => (
        <div key={title} className="p-6 bg-background border rounded-xl">
          <h3 className="font-semibold mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground">{desc}</p>
        </div>
      ))}
    </div>
  </section>
);
