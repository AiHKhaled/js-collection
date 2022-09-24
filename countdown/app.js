const months = [
  "january",
  "feb",
  "march",
  "april",
  "may",
  "june",
  "july",
  "sep",
  "oct",
  "nov",
  "dec",
];
const weekdays = ["sat", "sund", "mond", "tues", "wednesday", "thur", "fri"];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 00, 00, 00);
const Year = futureDate.getFullYear();
const hours = (futureDate.getHours() < 10 ? "0" : "") + futureDate.getHours();
const minutes =
  (futureDate.getMinutes() < 10 ? "0" : "") + futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();

const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${Year}, at ${hours}:${minutes}pm`;

const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  let days = Math.floor(t / oneDay);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);
  const values = [days, hours, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return `0${item}`;
    }
    return item;
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });

  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = ` <h4 class="expired">this offer expired</h4> `;
  }
}

let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();
