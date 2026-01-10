export const ExperienceSection = () => (
  <section className="py-24 bg-muted/30 reveal delay-200">
    <h1 className="text-2xl font-semibold mb-4 text-center ">
      Tiket Masuk Lawata
    </h1>
    <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
      {[
        ["Orang Dewasa", "Rp.3000"],
        ["Anak-Anak", "Rp.2000"],
        ["Kendraan Roda 2", "Rp.2000"],
        ["Kendaraan Roda 4", "Rp.4000"],
        ["Sewa Tempat", "Rp.500.000"],
      ].map(([title, desc]) => (
        <div key={title} className="p-6 bg-background border rounded-xl">
          <h3 className="font-semibold mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground">{desc}</p>
        </div>
      ))}
    </div>
  </section>
);
