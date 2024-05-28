import axios from 'axios';

const CLIENT_ID = '3d2164ac9633408eae4bc05e6db3dfda';
const CLIENT_SECRET = '448239c864114cf89d421fe033ea9c80';

const getAccessToken = async () => {
  const response = await axios.post('https://accounts.spotify.com/api/token', 
    'grant_type=client_credentials', {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(CLIENT_ID + ':' + CLIENT_SECRET)
    }
  });
  return response.data.access_token;
};

const searchTracks = async (query, token) => {
  const response = await axios.get(`https://api.spotify.com/v1/search`, {
    headers: {
      'Authorization': `Bearer ${token}`
    },
    params: {
      q: query,
      type: 'track',
      limit: 10
    }
  });
  return response.data.tracks.items;
};

export { getAccessToken, searchTracks };
