import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '20527083-60e3a2c02ad8fed093670ddbc';

const fetchHits = ({ searchQuery = '', currentPage = 1, perPage = 12 }) => {
  return axios
    .get(
      `${BASE_URL}?q=${searchQuery}&page=${currentPage}&key=${KEY}&
    image_type=photo&orientation=horizontal&per_page=${perPage}`,
    )
    .then(response => response.data.hits);
};

export default { fetchHits };
