const time = document.getElementById("time");
const date = document.getElementById("date");
const day = document.getElementById("day");

function updateClock() {
  const now = new Date();

  // Format time
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  time.textContent = `${hours}:${minutes}:${seconds}`;

  // Format date
  const d = now.getDate().toString().padStart(2, "0");
  const m = (now.getMonth() + 1).toString().padStart(2, "0");
  const y = now.getFullYear();
  date.textContent = `${d}/${m}/${y}`;

  // Format day
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  day.textContent = daysOfWeek[now.getDay()];
}

// Update immediately and then every second
updateClock();
const clockInterval = setInterval(updateClock, 1000);

// Prevent memory leaks when leaving the page
window.addEventListener("beforeunload", () => clearInterval(clockInterval));
