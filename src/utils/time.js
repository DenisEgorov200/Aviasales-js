export const time = (time, duration) => {
  const departureDate = new Date(time);
  const arrivalDate = new Date(time);

  const hours = departureDate.getUTCHours().toString().padStart(2, '0');
  const minutes = departureDate.getUTCMinutes().toString().padStart(2, '0');

  arrivalDate.setTime(arrivalDate.getTime() + duration * 60000);

  const updHours = arrivalDate.getUTCHours().toString().padStart(2, '0');
  const updMinutes = arrivalDate.getUTCMinutes().toString().padStart(2, '0');

  return `${hours}:${minutes} - ${updHours}:${updMinutes}`;
};
