'use client';

import { useState } from 'react';
import { Tabs, Button, Drawer, Form, Input, Upload } from 'antd';
import { UploadOutlined, UserOutlined, RocketOutlined } from '@ant-design/icons';
import "./styles.css";
import ItemCard from './ItemCard';

const AgentUtilityPage = () => {

  const [activeTab, setActiveTab] = useState('1');

  const [formAgent] = Form.useForm();
  const [formUtility] = Form.useForm();

  const onAgentFormFinish = () => {};
  const onUtilityFormFinish = () => {};
  const handleDelete = () => {};
  const handleEdit = () => {};
  const uploadProps = {};

  const [isAgentDrawerVisible, setIsAgentDrawerVisible] = useState(false);
  const [isUtilityDrawerVisible, setIsUtilityDrawerVisible] = useState(false);

  const showAgentDrawer = () => {
    setIsAgentDrawerVisible(true);
  }

  const showUtilityDrawer = () => {
    setIsUtilityDrawerVisible(true);
  }

  const onClose = () => {
    setIsAgentDrawerVisible(false);
    setIsUtilityDrawerVisible(false);
  }

  const onTabChange = (key) => {
    setActiveTab(key);
  }

  const agents = [
    { id: 1, name: 'Jett', iconLink: '/assets/icons/jett.jpg'},
    { id: 2, name: 'Phoenix', iconLink: '/assets/icons/phoenix.jpg'},
    { id: 3, name: 'Sage', iconLink: '/assets/icons/sage.jpg'},

  ];
  
  const utilities = [
    { id: 1, name: 'Smoke', iconLink: '/assets/icons/smoke.jpg'},
    { id: 2, name: 'Flash', iconLink: '/assets/icons/flash.jpg'},
    { id: 3, name: 'Barrier', iconLink: '/assets/icons/barrier.jpg'},
    
  ];


  const tabsItems = [
    {
      key: '1',
      label: (
        <span>
          <UserOutlined />
          Agents
        </span>
      ),
      children: (
        <div className="content">
          {agents.map(agent => (
            <ItemCard key={agent.id} item={agent} onDelete={handleDelete} onEdit={handleEdit} />
    ))}
      </div>
      ),
    },
    {
      key: '2',
      label: (
        <span>
          <RocketOutlined />
          Utilities
        </span>
      ),
      children: (
        <div className="content">
          {utilities.map(utility => (
            <ItemCard key={utility.id} item={utility} onDelete={handleDelete} onEdit={handleEdit} />
          ))}
        </div>
      ),
    },
  ];
  
  return (
    <div className="agent-utility-container">
      <Tabs defaultActiveKey="1" items={tabsItems} onChange={onTabChange} />
      <div className="add-new-button-container">
        {activeTab === '1' && (
          <Button type="primary" onClick={showAgentDrawer}>Add New Agent</Button>
        )}
        {activeTab === '2' && (
          <Button type="primary" onClick={showUtilityDrawer}>Add New Utility</Button>
        )}
      </div>

       {/* Agent Drawer with Form */}
      <Drawer
        title="Add a new agent"
        onClose={onClose}
        open={isAgentDrawerVisible}
      >
        <Form form={formAgent} layout="vertical" onFinish={onAgentFormFinish}>
          <Form.Item
            name="agentName"
            label="Name"
            rules={[{ required: true, message: 'Please enter an agent name!' }]}
          >
            <Input placeholder="Enter agent name" />
          </Form.Item>
          <Form.Item
            name="agentPortrait"
            label="Portrait"
            valuePropName="fileList"
            getValueFromEvent={(e) => (console.log(e))}
            extra="Upload agent portrait"
          >
            <Upload {...uploadProps}>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
      
      {/* Utility Drawer with Form */}
      <Drawer
        title="Add a new utility"
        onClose={onClose}
        open={isUtilityDrawerVisible}
      >
        <Form form={formUtility} layout="vertical" onFinish={onUtilityFormFinish}>
          <Form.Item
            name="utilityName"
            label="Name"
            rules={[{ required: true, message: 'Please enter a utility name!' }]}
          >
            <Input placeholder="Enter utility name" />
          </Form.Item>
          <Form.Item
            name="utilityIcon"
            label="Utility Icon"
            valuePropName="fileList"
            getValueFromEvent={(e) => (console.log(e))}
            extra="Upload utility icon"
          >
            <Upload {...uploadProps}>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
    )
  };

export default AgentUtilityPage;