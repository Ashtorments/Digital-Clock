let c = setInterval(showtime, 1000);
function showtime() {
  let a = new Date();
  let h = a.getHours();
  let m = a.getMinutes();
  let s = a.getSeconds();
  let d = a.getDate();
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  let currentTime = h + ":" + m + ":" + s;
  document.getElementById("clock").innerHTML = currentTime;
}
showtime();
let d = new Date();
document.getElementById("date").innerHTML = d.toDateString();
