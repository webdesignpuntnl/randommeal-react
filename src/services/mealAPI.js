import axios from 'axios';

export const baserUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';

export const getMeal = async () => {
  const result = await axios.get(baserUrl).then(data => data);

  return result;
} 