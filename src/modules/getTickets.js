import ky from 'ky';

export const getTickets = async (option, page = 1) => {
  const URL = `http://localhost:3000/tickets?_page=${page}&_limit=5`;

  try {
    return await ky.get(URL).json();
  } catch (error) {
    console.log(error.message);
  }
};
