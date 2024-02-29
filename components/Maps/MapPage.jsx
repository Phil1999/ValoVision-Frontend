"use client";
import { Row, Col, Divider, Space } from "antd";
import MapCard from "./MapCard";
import "./styles.css";
import dynamic from "next/dynamic";

const UploadMapBtn = dynamic(() => import("./UploadMapBtn"), {
  ssr: false, // This component will only render on the client-side
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
      <Divider type="vertical" />
      <Row gutter={[50, 50]} justify="space-evenly" className="row-container">
        {maps.map((map) => (
          <Col
            key={map.id}
            xs={24}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            className="map-container"
          >
            <MapCard item={map} />
          </Col>
        ))}
      </Row>
      <Divider />
      <Row justify="space-evenly">
        <Col>
          <UploadMapBtn />
        </Col>
      </Row>
    </>
  );
};

export default MapPage;
