"use client";
import MapCard from "./MapCard";
import "./styles.css";
import dynamic from "next/dynamic";

const UploadMapBtn = dynamic(() => import("./UploadMapBtn"), {
  ssr: false,
});

const maps = [
  { id: 1, name: "Ascent", src: "/assets/covers/ascent.jpg" },
  { id: 2, name: "Bind", src: "/assets/covers/bind.jpg" },
  { id: 3, name: "Fracture", src: "/assets/covers/fracture.jpg" },
  { id: 4, name: "Split", src: "/assets/covers/haven.jpg" },
  { id: 5, name: "Breeze", src: "/assets/covers/breeze.jpg" },
];

const MapPage = () => {
  return (
    <>
      <h1>Valorant Maps</h1>
      <div id="row-container">
        {maps.map((map) => (
          <div key={map.id} className="map-container">
            <MapCard item={map} />
          </div>
        ))}
      </div>
      <div className="divider"></div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <UploadMapBtn />
      </div>
    </>
  );
};

export default MapPage;
