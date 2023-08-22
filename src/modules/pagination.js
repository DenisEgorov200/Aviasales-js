import { getTickets } from 'components/getTickets.js';
import { displayTickets } from 'components/displayTickets.js';

const loadButton = document.querySelector('.button');

let displayedTickets = [];
let currentPage = 0;

export const pagination = async () => {
  currentPage += 1;

  try {
    const res = await getTickets('', currentPage);

    displayedTickets = [...displayedTickets, ...res];

    console.log(displayedTickets);

    if (res.length > 0) {
      displayTickets(displayedTickets);
    } else {
      loadButton.style.display = 'none';
    }
  } catch (error) {
    console.log(error.message);
  }
};

loadButton.addEventListener('click', pagination);
loadButton.click();
