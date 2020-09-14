import axios from 'axios';
const { config } = require('../config');

// eslint-disable-next-line react-hooks/exhaustive-deps
export const getReport = async (id) => {
  const url = config.url;
  const response = await axios.get(`${url}/peers/report/${id}`)
  return response.data;
}
