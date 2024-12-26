import axios from 'axios';

export const convertImageToBase64 = async (url: string) => {
  try {
    const response = await axios.get(url, { responseType: 'arraybuffer' });

    const base64Image = Buffer.from(response.data, 'binary').toString('base64');

    const contentType = response.headers['content-type'];
    const base64String = `data:image/${contentType};base64,${base64Image}`;

    return base64String;
  } catch (error) {
    console.error('Error converting image to base64:', error);
    throw error;
  }
};
