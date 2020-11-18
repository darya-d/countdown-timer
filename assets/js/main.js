const countDate = new Date('jan 1, 2021 00:00:00').getTime();

function newYear() {
  const now = new Date().getTime();
  const gap = countDate - now;

  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24,
        d = Math.floor(gap / (day)),
        h = Math.floor((gap % (day)) / (hour)),
        m = Math.floor((gap % (hour)) / (minute)),
        s = Math.floor((gap % (minute)) / (second));

  document.getElementById('day') .innerText = d;
  document.getElementById('hour') .innerText = h;
  document.getElementById('minute') .innerText = m;
  document.getElementById('second') .innerText = s;
}

setInterval(function() {
  newYear();
});

