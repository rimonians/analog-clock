// Select element
const clockFace = document.querySelector(".clock-face");
const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".minute-hand");
const secondHand = document.querySelector(".second-hand");

// Create face item
for (let i = 1; i <= 12; i++) {
  clockFace.innerHTML += `
  <div class="face-item ${i % 3 == 0 ? "strong" : null}" style="--n: ${i}">
    <h3>${i.toString().length === 1 ? "0" + i : i}</h3>
  </div>`;
}

// Run clock
const runClock = () => {
  const now = new Date();
  const currentSecond = now.getSeconds();
  const currentMinute = now.getMinutes();
  const currentHour = now.getHours();
  const secondRotate = 6 * currentSecond + "deg";
  const minuteRotate = 6 * (currentMinute + currentSecond / 60) + "deg";
  const hourRotate = 30 * (currentHour + currentMinute / 60) + "deg";
  secondHand.style.transform = `translateX(-50%) rotate(${secondRotate})`;
  minuteHand.style.transform = `translateX(-50%) rotate(${minuteRotate})`;
  hourHand.style.transform = `translateX(-50%) rotate(${hourRotate})`;
};

// Set clock running
setInterval(() => {
  runClock();
}, 1000);
