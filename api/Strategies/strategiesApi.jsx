import axios from 'axios';
import getBackendURL from '@/utils/urls';



const strategies_api_url = `${getBackendURL()}/api/strategies`;

export const fetchStrategies = async () => {
    try {
        const response = await axios.get(`${strategies_api_url}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching strategies:', error);
        throw error;
    }
};

export const createStrategy = async (strategyData) => {
    try {
        const response = await axios.post(`${strategies_api_url}`, strategyData);
        return response.data;
    } catch (error) {
        console.error('Error creating strategy:', error);
        throw error;
    }
};

export const updateStrategy = async (id, strategyData) => {
    try {
        const response = await axios.put(`${strategies_api_url}/${id}`, strategyData);
        return response.data;
    } catch (error) {
        console.error(`Error updating strategy with ID ${id}:`, error);
        throw error;
    }
};

export const deleteStrategy = async (id) => {
    try {
        const response = await axios.delete(`${strategies_api_url}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting strategy with ID ${id}:`, error);
        throw error;
    }
};
