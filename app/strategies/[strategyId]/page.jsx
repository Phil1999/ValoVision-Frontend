'use client';
import { useEffect } from 'react'
import strategiesData from '@/components/Strategies/data';
import { Image, Button } from 'antd';
import './styles.css';
import useStrategiesStore from "@/stores/strategiesStore"

const StrategyDetail = ({ params }) => {
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
  
  const handleButtonClick = () => {
    window.location.href = '/strategies';
  }

  const { strategyId } = params;

  const strategy = strategies.find(strategy => strategy.strategyID === parseInt(strategyId, 10));

  if (!strategy) {
    return <p>Strategy not found.</p>;
  }

  return (
    <>
    <Button onClick={handleButtonClick}>Back</Button>
      <div className='strategy-detail-container'>
        <h1>{strategy.strategyTitle}</h1>
        <h2>{strategy.mapName}</h2>
        <Image width = {350} src={`/${strategy.mapImageLink}`}/>
        <p>{strategy.strategyDescription}</p>
      </div>
    </>
  );
}

export default StrategyDetail;
