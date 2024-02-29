import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import { Button, Col, Drawer, Form, Input, Row, Upload, Space } from "antd";

const UploadMapBtn = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onFileChange = (info) => {
    console.log(info.fileList);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
        New Map
      </Button>
      <Drawer
        title="Upload New Map"
        placement="right"
        width={360}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={onClose} type="primary">
              Submit
            </Button>
          </Space>
        }
      >
        <Form layout="vertical">
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="mapName"
                label="Map Name"
                rules={[{ required: true, message: "Please enter map name" }]}
              >
                <Input placeholder="Enter map name" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                name="upload"
                label="Map Image"
                valuePropName="fileList"
                rules={[{ required: true, message: "Please upload map image" }]}
              >
                <Upload
                  name="mapImage"
                  action="/upload.do"
                  listType="picture"
                  onChange={onFileChange}
                >
                  <Button icon={<UploadOutlined />}>Click to upload</Button>
                </Upload>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};

export default UploadMapBtn;
