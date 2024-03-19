import axios from 'axios';
import getBackendURL from '@/utils/urls';



const maps_api_url = `${getBackendURL()}/api/maps`;

export const fetchMaps = async () => {
    try {
        const response = await axios.get(`${maps_api_url}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching maps:', error);
        throw error;
    }
};

export const createMap = async (mapData) => {
    try {
        const response = await axios.post(`${maps_api_url}`, mapData);
        return response.data;
    } catch (error) {
        console.error('Error creating map:', error);
        throw error;
    }
};

export const updateMap = async (id, mapData) => {
    try {
        const response = await axios.put(`${maps_api_url}/${id}`, mapData);
        return response.data;
    } catch (error) {
        console.error(`Error updating map with ID ${id}:`, error);
        throw error;
    }
};

export const deleteMap = async (id) => {
    try {
        const response = await axios.delete(`${maps_api_url}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting map with ID ${id}:`, error);
        throw error;
    }
};
