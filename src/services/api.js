import axios from 'axios';

const API_URL = 'https://back-portal-transparencia.onrender.com';

export const getEmpenho = async () => {
  try {
    const response = await axios.get(`${API_URL}/empenho`);
    return response.data;
  } catch (error) {
    console.error('Error fetching empenho data:', error);
    throw error;
  }
};

export const getEmpenhoById = async (id) => {
    try {
      const response = await axios.get(`${API_URL}/empenho/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching empenho data:', error);
      throw error;
    }
  };