import axios from 'axios';
import getBackendURL from '@/utils/urls';



const utilities_api_url = `${getBackendURL()}/api/utilities`;

export const fetchUtilities = async () => {
    try {
        const response = await axios.get(`${utilities_api_url}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching utilities:', error);
        throw error;
    }
};

export const createUtility = async (utilityData) => {
    try {
        const response = await axios.post(`${utilities_api_url}`, utilityData);
        return response.data;
    } catch (error) {
        console.error('Error creating utility:', error);
        throw error;
    }
};

export const updateUtility = async (id, utilityData) => {
    try {
        const response = await axios.put(`${utilities_api_url}/${id}`, utilityData);
        return response.data;
    } catch (error) {
        console.error(`Error updating utility with ID ${id}:`, error);
        throw error;
    }
};

export const deleteUtility = async (id) => {
    try {
        const response = await axios.delete(`${utilities_api_url}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting utility with ID ${id}:`, error);
        throw error;
    }
};
