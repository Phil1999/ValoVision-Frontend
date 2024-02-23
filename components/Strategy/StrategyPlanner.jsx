"use client";

import { useState } from 'react';
import StrategyToolBar from './StrategyToolBar';
import StrategyCanvas from './StrategyCanvas';
import AgentSelector from './AgentSelector';
import "./styles.css";

const StrategyPlanner = () => {
    const [currentMap, setCurrentMap] = useState("ascent.jpg");
    const [markers, setMarkers] = useState([]);
    const [currentMarker, setCurrentMarker] = useState({ name: 'Jett', icon: '/assets/icons/jett.jpg' });

    const handleSelectMap = (value) => {
        clearMarkers();
        setCurrentMap(value);
    };

    const handleMarkerSelection = (selection) => {
        setCurrentMarker(selection);
    };

    const addMarker = (x, y, icon) => {
        setMarkers((prev) => [...prev, { x, y, icon }]);
    };

    const clearMarkers = () => {
        setMarkers([]);
    };

    const undoLastMarker = () => {
        setMarkers((markers) => markers.slice(0, markers.length - 1));
    };

    return (
        <div className = "strategy-tools">
            <StrategyToolBar
                onMapChange={handleSelectMap}
                onClearMarkers={clearMarkers}
                onUndoLastMarker={undoLastMarker}
                defaultMap="Ascent"
            />
            <AgentSelector onSelection={handleMarkerSelection} />
        
            <div className = "strategy-planner">
                <StrategyCanvas
                    currentMap={currentMap}
                    markers={markers}
                    onAddMarker={addMarker}
                    currentMarker={currentMarker}
                />

            </div>

        </div>
    )
};

export default StrategyPlanner;