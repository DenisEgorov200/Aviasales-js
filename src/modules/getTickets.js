import ky from 'ky';
import { displayTickets } from 'components/displayTickets.js';

export const getTickets = async (option) => {
  let URL = `http://localhost:3000/tickets${option ? `?_sort=${option}&_order=asc` : ''}`;
  const res = await ky.get(URL).json();

  displayTickets(res);
};

getTickets();
