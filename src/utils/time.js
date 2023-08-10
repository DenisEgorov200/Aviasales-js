export const time = (time, duration) => {
  const departureDate = new Date(time);
  const arrivalDate = new Date(time);

  const hours = departureDate.getUTCHours();
  const minutes = (departureDate % 60).toString().padStart(2, '0');

  arrivalDate.setMinutes(arrivalDate.getMinutes() + duration);
  const updHours = arrivalDate.getUTCHours();
  const updMinutes = (arrivalDate % 60).toString().padStart(2, '0');

  return `${hours}:${minutes} - ${updHours}:${updMinutes}`;
};
