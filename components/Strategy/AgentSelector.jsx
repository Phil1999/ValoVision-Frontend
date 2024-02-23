'use client';

import { useState } from 'react';
import { Avatar, Space } from 'antd';

const AgentSelector = ({ onSelection }) => {
    const [selectedItem, setSelectedItem] = useState('Jett');

    const items = [
        // Agents
        { name: 'Jett', icon: '/assets/icons/jett.jpg' },
        { name: 'Phoenix', icon: '/assets/icons/phoenix.jpg' },
        { name: 'Sage', icon: '/assets/icons/sage.jpg' },
        // Utilities
        { name: 'Smoke', icon: '/assets/icons/smoke.jpg' },
        { name: 'Flash', icon: '/assets/icons/flash.jpg' },
        { name: 'Barrier', icon: '/assets/icons/barrier.jpg' },
        { name: 'none', icon: '' },
    ];

    const handleItemClick = (item) => {
        setSelectedItem(item.name);
        onSelection(item);
    };

    return (
        <Space>
        {items.map((item, index) => (
            <Avatar
            className={`item-select ${selectedItem === item.name ? 'item-icon-selected' : ''} ${index !== items.length - 1 ? 'avatar-divider' : ''}`}
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