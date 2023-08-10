const ticketList = document.querySelector('.tickets__list');

export const displayTickets = (tickets) => {
  console.log(tickets);

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
                  <p class="ticket__subtitle">${new Date(segment.date).getUTCMinutes()}</p>
                </div>
                <div class="ticket__item">
                  <span class="ticket__title">В пути</span>
                  <p class="ticket__subtitle">${segment.duration}</p>
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

  const segments = tickets.forEach((ticket) => console.log(ticket.segments));
  console.log(segments);
};

// <div className="ticket__item">
//   <span className="ticket__title">MOW-HKT</span>
//   <p className="ticket__subtitle">10:45-08:00</p>
// </div>
// <div className="ticket__item">
//   <span className="ticket__title">В пути</span>
//   <p className="ticket__subtitle">21ч 15м</p>
// </div>
// <div className="ticket__item">
//   <span className="ticket__title">2 пересадки</span>
//   <p className="ticket__subtitle">HKG, JNB</p>
// </div>
// <div className="ticket__item">
//   <span className="ticket__title">MOW-HKT</span>
//   <p className="ticket__subtitle">11:20-00:50</p>
// </div>
// <div className="ticket__item">
//   <span className="ticket__title">В пути</span>
//   <p className="ticket__subtitle">13ч 30м</p>
// </div>
// <div className="ticket__item">
//   <span className="ticket__title">1 пересадки</span>
//   <p className="ticket__subtitle">HKG</p>
// </div>
