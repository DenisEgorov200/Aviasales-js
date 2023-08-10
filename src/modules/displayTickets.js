import { duration } from '@/utils/duration.js';
import { time } from '@/utils/time.js';

const ticketList = document.querySelector('.tickets__list');

export const displayTickets = (tickets) => {
  ticketList.innerHTML = tickets
    .map(
      (ticket) => `
        <li class="tickets__item ticket">
          <div class="ticket__header">
            <span class="ticket__price">${ticket.price} Р</span>
            <div class="ticket__img">
              <img src="/airlanes.png" alt="airlanes" />
            </div>
          </div>
          <div class="ticket__body">
            ${ticket.segments
              .map(
                (segment) => `
                <div class="ticket__item">
                  <span class="ticket__title">${segment.origin}-${segment.destination}</span>
                  <p class="ticket__subtitle">${time(segment.date, segment.duration)}</p>
                </div>
                <div class="ticket__item">
                  <span class="ticket__title">В пути</span>
                  <p class="ticket__subtitle">${duration(segment.duration)}</p>
                </div>
                <div class="ticket__item">
                  <span class="ticket__title">${segment.stops.length} Пересадка</span>
                  <p class="ticket__subtitle">${segment.stops}</p>
                </div>`,
              )
              .join('')}
          </div>
        </li>
      `,
    )
    .join('');
};
