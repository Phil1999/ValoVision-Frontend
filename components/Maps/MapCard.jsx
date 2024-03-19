import "./styles.css";
import { Button, Divider, Space } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const MapCard = ({ item }) => {
  return (
    <div className="card" id="map-card">
      <div className="image-container">
        <img className="item-image" alt={item.name} src={item.src} />
        <div className="custom-overlay">{item.name}</div>
      </div>
      <div id="btn-group">
        <Space split={<Divider type="vertical" />}>
          <Button
            icon={<EditOutlined style={{ fontSize: "24px", color: "#fff" }} />}
            // onClick={() => onEdit(item)}
            disabled
            key="edit"
            type="text"
          />
          <Button
            icon={
              <DeleteOutlined style={{ fontSize: "24px", color: "#fff" }} />
            }
            // onClick={() => onEdit(item)}
            disabled
            key="edit"
            type="text"
          />
        </Space>
      </div>
    </div>
  );
};

export default MapCard;
