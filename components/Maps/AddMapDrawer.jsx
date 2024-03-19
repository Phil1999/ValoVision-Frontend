import React, { useState } from 'react';
import { Drawer, Form, Button, Select, Input, message } from 'antd';
import dataMaps from "@/public/data/maps";

const AddMapDrawer = ({ isVisible, onClose, onFinishAddingMap, existingMaps }) => {
  const [form] = Form.useForm();

  const handleFinish = async (values) => {
    // Check for duplicate map names
    const isDuplicate = existingMaps.some(map => map.mapName === values.mapName);
    if (isDuplicate) {
      message.error("A map with this name already exists. Please use a different name.");
      return;
    }

    await onFinishAddingMap(values);
    message.success("Map added successfully");
    form.resetFields();
    onClose();
  };

  return (
    <Drawer
      title="Add a New Map"
      onClose={onClose}
      open={isVisible}
    >
      <Form form={form} layout="vertical" onFinish={handleFinish}>
        <Form.Item
          name="mapName"
          label="Map Name"
          rules={[{ required: true, message: "Please input the map name!" }]}
        >
          <Input placeholder="Enter map name" />
        </Form.Item>

        <Form.Item
          name="mapImageLink"
          label="Map Image"
          rules={[{ required: true, message: "Please select a map image!" }]}
        >
          <Select
            placeholder="Select a map image"
            onChange={(value) => {
              // Optionally handle selection change if needed
            }}
          >
            {dataMaps.map((map) => (
              <Select.Option key={map.mapName} value={map.mapImageLink}>{map.mapName}</Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Drawer>
  );
};

export default AddMapDrawer;
