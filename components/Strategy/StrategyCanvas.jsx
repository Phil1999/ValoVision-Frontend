"use client";

import { useRef, useEffect, useState } from "react";
import { Select } from "antd";


export default function StrategyCanvas() {
  const canvasRef = useRef(null);
  const [currentMap, setCurrentMap] = useState("haven.jpg");
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const mapImage = new Image();

    mapImage.onload = () => {
      canvas.width = mapImage.width;
      canvas.height = mapImage.height;
      context.drawImage(mapImage, 0, 0);
      markers.forEach((marker) => placeMarker(context, marker.x, marker.y));
    };

    mapImage.src = `/assets/images/${currentMap}`;
  }, [markers, currentMap]);

  const placeMarker = (context, x, y) => {
    context.fillStyle = "red";
    context.beginPath();
    context.arc(x, y, 10, 0, Math.PI * 2);
    context.fill();
  };

  const handleClick = (event) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    setMarkers((prev) => [...prev, { x, y }]);
  };

  const handleSelectMap = (value) => {
    clearMarkers();
    setCurrentMap(`${value}`);
};

  const undoLastMarker = () => {
    setMarkers((markers) => markers.slice(0, markers.length - 1));
  };

  const clearMarkers = () => {
    setMarkers([]);
  };

  return (
    <>
      <Select
        onChange={handleSelectMap}
        defaultValue="Haven"
        style={{
          width: 120,
        }}
        options={[
          {
            value: "haven.jpg",
            label: "Haven",
          },
          {
            value: "breeze.png",
            label: "Breeze",
          },
        ]}
      />
      <canvas ref={canvasRef} onClick={handleClick} width={800} height={600} />
      <button onClick={clearMarkers}>Clear</button>
      <button onClick={undoLastMarker}>Undo</button>
    </>
  );
}
