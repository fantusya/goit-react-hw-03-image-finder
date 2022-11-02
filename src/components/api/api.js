import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '30081101-40180903bea68f83c1da8999a';

const fetchImages = async queryImg => {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: queryImg,
      page: 1,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    },
  });

  console.log(response);

  if (response.data.total === 0) {
    return Promise.reject(new Error(`Нет картинок с именем ${queryImg}`));
  } else {
    return response.data.hits;
  }

  //   return response.data.hits;
};

export default fetchImages;
