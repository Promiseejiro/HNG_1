const currentTimeUTC = document.querySelector('[data-testid="currentTimeUTC"]');
const currentDay = document.querySelector('[data-testid="currentDay"]');
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const date = new Date();
currentTimeUTC.textContent = date.toUTCString();
currentDay.textContent = daysOfWeek[date.getDay()];
