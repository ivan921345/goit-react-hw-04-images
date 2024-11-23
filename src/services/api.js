import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchImages = async (query, page) => {
  const resp = await axios.get('https://pixabay.com/api/', {
    params: {
      key: '45197188-964a3d40e0cf282ecb9c097d6',
      q: query,
      per_page: 12,
      page,
    },
  });
  return resp.data;
};
