const now = new Date();
// console.log(dateFns.isToday(now));

// formatting options
console.log(dateFns.format(now, "YYYY"));
console.log(dateFns.format(now, "MMM"));
console.log(dateFns.format(now, "dddd"));
console.log(dateFns.format(now, "Do"));
console.log(dateFns.format(now, "dddd Do MMMM YYYY"));

// comparing dates
const before = new Date("June 22 2022 7:30:59");
console.log(dateFns.distanceInWords(now, before, { addSuffix: true }));

const clock = document.querySelector(".clock");
const tick = () => {
  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();

  const html = `
  <span>${h}</span> :
  <span>${m}</span> :
  <span>${s}</span> 
  `;
  clock.innerHTML = html;
};

setInterval(tick, 1000);

// timestamps
// const now = new Date();

//console.log(now.getTime(), before.getTime());

// const diff = now.getTime() - before.getTime();
// console.log(diff);

// const mins = Math.round(diff / 1000 / 60);
// const hours = Math.round(mins / 60);
// const days = Math.round(hours / 24);

// console.log(mins, hours, days);
// console.log(`the blog was written ${days} ago`);

// converting timestamps into date objects
// const timestamps = 1675938474990;
// console.log(new Date(timestamps));
