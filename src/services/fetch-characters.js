import axios from "axios";
const baseURL = 'https://smashbros-unofficial-api.vercel.app/api/v1';

const defaultOptions = {
  timeout: 90000,
  headers: {
    'Content-Type': 'application/json',
  },
};

export const createAxiosInstance = (base) => axios.create({ ...defaultOptions, baseURL: base });

const http = createAxiosInstance(baseURL);

export const getAllCharacters = async (params) => {
  try {
    const response = await http.get('/ultimate/characters', { params });
    return response.data;
  } catch (err) {
    console.error(err);
  }
  return [];
}

export const getCharacter = async (name) => {
  try {
    if (name === 'mr. game-%26-watch') {
      name = name.split('-%26-')[ 0 ]
    }
    if (name === 'banjo %26-kazooie') {
      name = name.split(' %26-')[ 0 ]
    }
    if (name === 'pac man') {
      name = 'pac-man'
    }
    console.log(name);
    const response = await http.get(`/ultimate/characters?name=${name}`);
    console.log(response.data);
    if (response.data.length !== 1) {
      return response.data.find((item) => item.name.toLowerCase() === name)
    } else {
      return response.data[ 0 ]
    }
  } catch (err) {
    console.error(err);
  }
  return null;
}