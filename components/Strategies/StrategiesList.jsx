'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import strategiesData from './data';
import { List, Avatar } from 'antd';
import './styles.css';
import useStrategiesStore from "@/stores/strategiesStore"

const StrategiesList = () => {

    const {
      strategies,
      loading,
      error,
      fetchStrategies,
      addStrategy,
      updateStrategy,
      deleteStrategy,
    } = useStrategiesStore();

    useEffect(() => {
      fetchStrategies();
    }, []);

    return (
        <div className="strategies-list">
            <List
            itemLayout="vertical"
            dataSource={strategies}
            renderItem={strategy => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src={strategy.mapImageLink} />}
                            title={
                                <Link href={`/strategies/${strategy.strategyID}`}>
                                  {`${strategy.mapName} - ${strategy.strategyTitle}`}
                                </Link>
                            }
                            description={<span className="description-text">{strategy.strategyDescription}</span>}
                        />
                    </List.Item>
            )}
            />
        </div>
    );
};

export default StrategiesList;
