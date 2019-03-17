import { Injectable } from '@angular/core';

@Injectable()
export class TitleGeneratorService {

  private weekday = new Array(7);

  private randomWordArray = Array(
    "Oh my, it's ",
    "Whoop, it's ",
    "Happy ",
    "Seems it's ",
    "Awesome, it's ",
    "Have a nice ",
    "Happy fabulous ",
    "Enjoy your "
  );

  constructor() {
    this.weekday[0] = "Sunday 🖖";
    this.weekday[1] = "Monday 💪😀";
    this.weekday[2] = "Tuesday 😜";
    this.weekday[3] = "Wednesday 😌☕️";
    this.weekday[4] = "Thursday 🤗";
    this.weekday[5] = "Friday 🍻";
    this.weekday[6] = "Saturday 😴";
  }

  private getWeekday(): string {
    let d = new Date();
    return this.weekday[d.getDay()];
  }

  buildText(): string{
    return this.randomWordArray[Math.floor(Math.random() * this.randomWordArray.length)]+this.getWeekday();
  }



}
