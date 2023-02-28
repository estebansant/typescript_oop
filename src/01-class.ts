const date = new Date();
date.getDay();
date.getHours();
date.toISOString();

const date2 = new Date(1193, 1, 12);
date2.getDay();
date2.getHours();
date2.toISOString();

console.log(date);
console.log(date2);

class MyDate {
  year: number;
  month: number;
  day: number;

  constructor(year:number, month:number, day:number){
    this.year = year;
    this.month = month;
    this.day = day;

  }
}

const myDate = new MyDate(2023, 3, 16);
console.log('My date:', myDate);
