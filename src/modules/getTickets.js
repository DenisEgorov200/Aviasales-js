import ky from 'ky';
import { displayTickets } from 'components/displayTickets.js';

export const getTickets = async () => {
  const URL = 'http://localhost:3000/tickets/';
  const res = await ky.get(URL).json();

  displayTickets(res);
};

getTickets();
