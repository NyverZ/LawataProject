import Map from "@/components/GoogleMap";
const About = () => {
  return (
    <>
      <div style={{ padding: "2rem" }}>
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl font-bold">About</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Pantai Lawata dikenal dengan pemandangan laut yang indah, garis
            pantai yang landai, serta suasana yang tenang. Dari kawasan pantai,
            pengunjung dapat menikmati panorama Teluk Bima dengan latar
            perbukitan yang menambah daya tarik alamnya, terutama saat matahari
            terbit dan terbenam.
          </p>
        </div>
        <Map />
      </div>
    </>
  );
};

export default About;
