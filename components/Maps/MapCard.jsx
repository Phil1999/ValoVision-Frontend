import { Card, Button, Image } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import "./styles.css";

const MapCard = ({ item }) => {
  return (
    <Card
      className="map-card"
      actions={[
        <div className="btn-group">
          <Button
            size="large"
            className="card-buttons"
            icon={<EditOutlined className="btn-icon" />}
            disabled
            key="edit"
            type="text"
          />
          <Button
            size="large"
            className="card-buttons"
            icon={<DeleteOutlined className="btn-icon" />}
            disabled
            key="delete"
            type="text"
          />
        </div>,
      ]}
      cover={
        <div className="image-container">
          <Image
            className="item-image"
            alt={item.name}
            src={item.src}
            visible={false}
          />
          <div className="custom-overlay">{item.name}</div>
        </div>
      }
    ></Card>
  );
};

export default MapCard;
