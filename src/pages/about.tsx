import Map from "@/components/GoogleMap";
const About = () => {
  return (
    <>
      <div style={{ padding: "2rem" }}>
        <h1 className="font-bold text-xl">About</h1>
        <p>Location:</p>
        <Map />
      </div>
    </>
  );
};

export default About;
