import Map from "@/components/GoogleMap";
const About = () => {
  return (
    <>
      <section className="min-h-screen bg-background text-foreground reveal delay-200">
        <div style={{ padding: "2rem" }}>
          <div className="text-center space-y-4 mb-16">
            <h1 className="text-4xl font-bold">About</h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Pantai Lawata berada di Kota Bima, Nusa Tenggara Barat, dan
              dikenal sebagai salah satu pantai yang paling mudah diakses di
              kawasan ini. Letaknya yang dekat dengan pusat kota membuat pantai
              ini sering menjadi pilihan untuk melepas pena Akses jalan menuju
              Pantai Lawata cukup nyaman dan bisa dilalui kendaraan roda dua
              maupun roda empat. Begitu tiba, pengunjung akan langsung disambut
              pemandangan laut terbuka dan suasana pesisir yang menenangkan.
              Lokasi yang strategis dan suasana yang tenang menjadikan Pantai
              Lawata cocok untuk menikmati waktu santai, terutama saat sore hari
              menjelang matahari terbenam.
            </p>
          </div>
          <Map />
        </div>
      </section>
    </>
  );
};

export default About;
