"use client";
import React, { useState, useEffect } from "react";
import MapCard from "./MapCard";
import "./styles.css";
import EditMapDrawer from "./EditMapDrawer";
import AddMapDrawer from "./AddMapDrawer";
import useMapsStore from "@/stores/mapsStore"; // Ensure correct path
import { Button, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const MapPage = () => {
  const { maps, fetchMaps, deleteMap } = useMapsStore(); // Include deleteMap method
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  useEffect(() => {
    fetchMaps().then(() => {
      console.log("All maps:", maps);
    });
  }, [fetchMaps]);

  const showDrawer = () => {
    setIsDrawerVisible(true); // Function to toggle drawer visibility
  };

  const onClose = () => {
    setIsDrawerVisible(false); // Close drawer
  };

  const onFinishAddingMap = async (mapData) => {
    console.log(mapData);
    // Handle the submission of the new map data here
    onClose(); // Close drawer after submission
  };

  const handleDeleteMap = async (mapId) => {
    console.log("Deleting map with ID:", mapId);
    try {
      await deleteMap(mapId);
      message.success('Map deleted successfully');
      fetchMaps(); // Refresh the list of maps after deletion
    } catch (error) {
      console.error("Failed to delete map: ", error);
      message.error('Failed to delete map');
    }
  };

  return (
    <>
      <div id="row-container">
        {maps.map((map) => (
          <div key={map.id} className="map-container">
            <MapCard item={map} onDelete={handleDeleteMap} /> {/* Pass handleDeleteMap to each MapCard */}
          </div>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={showDrawer}
          style={{ marginBottom: 16 }}
        >
          Upload Map
        </Button>
      </div>
      <AddMapDrawer
        isVisible={isDrawerVisible}
        onClose={onClose}
        onFinishAddingMap={onFinishAddingMap}
        existingMaps={maps} 
      />
    </>
  );
};

export default MapPage;
