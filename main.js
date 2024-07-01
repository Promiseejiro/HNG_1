const slackNameElement = document.querySelector('[data-testid="slackName"]');
const slackEmailElement = document.querySelector(
  '[data-testid="slackEmailElement"]'
);
const profileImage = document.querySelector('[data-testid="profile-image"]');
const currentTimeElement = document.querySelector(
  '[data-testid="currentTimeElement"]'
);
const currentDayElement = document.querySelector(
  '[data-testid="currentDayElement"]'
);
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
profileImage.src = "./assets/slackProfileImage.jpg";
slackNameElement.textContent = "Promiseejiro";
slackEmailElement.textContent = "promiseejiro43@gmail.com";
currentTimeElement.textContent = date.toUTCString();
currentDayElement.textContent = daysOfWeek[date.getDay()];
