'use client';

import { useState, useEffect } from 'react';
import { Avatar, Space } from 'antd';
import useUtilitiesStore from '@/stores/utilitiesStore';
import useAgentsStore from '@/stores/agentsStore';


const AgentSelector = ({ onSelection }) => {
    const [selectedItem, setSelectedItem] = useState('Jett');


    const {
      utilities,
      fetchUtilities,
    } = useUtilitiesStore();
    
    const {
      agents,
      fetchAgents,
    } = useAgentsStore();

    useEffect(() => {
      fetchAgents();
      fetchUtilities();
    }, [])

  // We need to remap the values  
  const combinedItems = [
      ...agents.map(agent => ({
        name: agent.agentName,
        icon: agent.agentPortraitLink
      })),
      ...utilities.map(utility => ({
        name: utility.utilityName,
        icon: utility.utilityIconLink
      })),
      { name: 'none', icon: '' },
  ];

    const handleItemClick = (item) => {
        setSelectedItem(item.name);
        onSelection(item);
    };

    return (
        <Space>
        {combinedItems.map((item, index) => (
            <Avatar
            className={`item-select ${selectedItem === item.name ? 'item-icon-selected' : ''} ${index !== combinedItems.length - 1 ? 'avatar-divider' : ''}`}
                key={item.name}
                src={item.icon}
                size="large"
                onClick={() => handleItemClick(item)}
            />
        ))}
    </Space>
    );
};

export default AgentSelector
