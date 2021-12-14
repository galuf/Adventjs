const date = new Date("Dec 25, 2021"); //-> 6
const date1 = new Date("Dec 1, 2021"); //-> 3
// daysToXmas(date1) // 24
const date2 = new Date("Dec 24, 2021 00:00:01"); // -> 5
// daysToXmas(date2) // 1
const date3 = new Date("Dec 24, 2021 23:59:59"); // -> 5
// daysToXmas(date3) // 1
const date4 = new Date("December 20, 2021 03:24:00"); // -> 1
const date5 = new Date("December 25, 2021"); // -> 1
const date6 = new Date("Dec 26, 2021");
//daysToXmas(date1) // -1
const date7 = new Date("Dec 31, 2021");
//daysToXmas(date2) // -6
const date8 = new Date("Jan 1, 2022 00:00:01");
//daysToXmas(date3) // -7
const date9 = new Date("Jan 1, 2022 23:59:59");

function daysToXmas(date) {
  const navidad = new Date("Dec 25, 2021").getTime();
  const timeMilli = date.getTime();

  const days = (navidad - timeMilli) / 86400000;

  return Math.ceil(days);
}

console.log(daysToXmas(date1));
console.log(daysToXmas(date2));
console.log(daysToXmas(date3));
console.log(daysToXmas(date4));
console.log(daysToXmas(date5));
console.log(daysToXmas(date6));
console.log(daysToXmas(date7));
console.log(daysToXmas(date8));
console.log(daysToXmas(date9));
