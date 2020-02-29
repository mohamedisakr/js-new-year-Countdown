const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const countdown = document.querySelector("#countdown");
const year = document.querySelector("#year");
const loading = document.querySelector("#loading");

const currentYear = new Date().getFullYear();
const newYear = new Date(`Jan 01 ${currentYear + 1} 00:00:00`);

year.innerHTML = currentYear + 1;

function updateCountdown() {
  const currentTime = new Date();
  const diff = newYear - currentTime;
  const dd = Math.floor(diff / 1000 / 60 / 60 / 24);
  const hh = Math.floor(diff / 1000 / 60 / 60) % 24;
  const mm = Math.floor(diff / 1000 / 60) % 60;
  const ss = Math.floor(diff / 1000) % 60;
  console.log(`${dd}:${hh}:${mm}:${ss}`);

  days.innerHTML = dd;
  hours.innerHTML = hh < 10 ? `0${hh}` : hh;
  minutes.innerHTML = mm < 10 ? `0${mm}` : mm;
  seconds.innerHTML = ss < 10 ? `0${ss}` : ss;
}

setTimeout(() => {
  loading.remove();
  countdown.style.display = "flex";
}, 1000);

setInterval(updateCountdown, 1000);
