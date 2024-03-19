import { useEffect, useState } from 'react';
import { Drawer, Form, Button, Select, Input } from "antd";
import dataMaps from "@/public/data/maps"; 

const { Option } = Select;

const EditMapDrawer = ({ isVisible, onClose, currentMap, onFinishEditingMap }) => {
    const [form] = Form.useForm();
    const [selectedImage, setSelectedImage] = useState(currentMap?.mapImageLink);
  
    useEffect(() => {
      form.setFieldsValue({
        mapID: currentMap?.mapID,
        mapName: currentMap?.mapName,
        mapImageLink: currentMap?.mapImageLink,
      });
      setSelectedImage(currentMap?.mapImageLink);
    }, [currentMap, form]);
  
    const onFinish = (values) => {
      onFinishEditingMap(values);
    };
  
    return (
      <Drawer
        title="Edit Map"
        onClose={onClose}
        open={isVisible}
      >
        <Form
          form={form}
          layout="vertical"
          initialValues={currentMap}
          onFinish={onFinish}
        >
          <Form.Item label="Map ID">
            <span className="ant-form-text">{currentMap?.mapID}</span>
          </Form.Item>
  
          <Form.Item
            name="mapName"
            label="Map Name"
            rules={[{ required: true, message: "Please input the map's name!" }]}
          >
            <Select
              placeholder="Select a map"
              onChange={(value) => {
                const selectedMap = dataMaps.find(map => map.mapName === value);
                setSelectedImage(selectedMap.mapImageLink);
                form.setFieldsValue({ mapImageLink: selectedMap.mapImageLink });
              }}
            >
              {dataMaps.map(map => (
                <Option key={map.mapName} value={map.mapName}>{map.mapName}</Option>
              ))}
            </Select>
          </Form.Item>
  
          <Form.Item
            name="mapImageLink"
            label="Map Image"
          >
            <Input disabled />
          </Form.Item>
  
          {selectedImage && (
            <img src={selectedImage} alt="Selected Map Image" style={{ width: "25%", margin: "20px 0" }} />
          )}
  
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Save Changes
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    );
  };
  
export default EditMapDrawer;
