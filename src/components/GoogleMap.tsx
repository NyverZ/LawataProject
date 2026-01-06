import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { Spinner } from "./ui/spinner";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: -8.4717072,
  lng: 118.7110787,
};

export default function Map() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <Spinner />;

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
      <Marker position={center} />
    </GoogleMap>
  );
}
