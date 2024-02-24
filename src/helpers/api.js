import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

const API_KEY = '9172745-088e6c545fefcd781d4229961';
const IMAGES_PER_PAGE = 12;

export const getImages = async (query, page) => {
    return await axios.get(`/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${IMAGES_PER_PAGE}`)
}