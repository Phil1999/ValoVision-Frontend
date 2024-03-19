import "./styles.css";
import { Button, Divider, Space } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const MapCard = ({ item, onDelete }) => {
  return (
    <div className="card" id="map-card">
      <div className="image-container">
        <img className="item-image" alt={item.mapName} src={item.mapImageLink} />
        <div className="custom-overlay">{item.mapName}</div>
      </div>
      <div id="btn-group">
        <Space split={<Divider type="vertical" />}>
          <Button
            icon={<EditOutlined style={{ fontSize: "24px", color: "#fff" }} />}
            // You might later implement an edit functionality here
            disabled // Temporarily disabled until functionality is implemented
            type="text"
          />
          <Button
            icon={<DeleteOutlined style={{ fontSize: "24px", color: "#fff" }} />}
            onClick={() => onDelete(item.mapId)} // Use the onDelete function passed from the parent component
            type="text"
          />
        </Space>
      </div>
    </div>
  );
};

export default MapCard;
