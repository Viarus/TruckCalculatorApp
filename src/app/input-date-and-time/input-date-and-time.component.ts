import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-date-and-time',
  templateUrl: './input-date-and-time.component.html',
  styleUrls: ['./input-date-and-time.component.css']
})
export class InputDateAndTimeComponent implements OnInit {
  constructor() { }

  timeOfStart: number = 0;
  timeOfFinish: number = 1260;
  inputedDate: Date;

  notStartedTodayInput: boolean = false;
  notFinishedTodayInput: boolean = false;

  dayWorkedTime: { hour: number, minute: number } = { hour: 0, minute: 0 };

  ngOnInit(): void {
  }

  saveTime(timeHolder: { timeOfStart: { hour: number, minute: number }, timeOfFinish: { hour: number, minute: number } }) {
    this.timeOfStart = this.toMinutesOnly(timeHolder.timeOfStart);
    this.timeOfFinish = this.toMinutesOnly(timeHolder.timeOfFinish);
  }

  saveDate(dateHolder: Date) {
    this.inputedDate = dateHolder;
  }

  toMinutesOnly(timeHolder: { hour: number, minute: number }) {
    return (timeHolder.hour * 60) + timeHolder.minute;
  }

  toNormalTime(minutesHolder: number) {
    let minutes = minutesHolder % 60;
    let hours = Math.floor(minutesHolder / 60);
    let time: { hour: number, minute: number } = { hour: hours, minute: minutes }
    return time;
  }

  getDayWorkedTime() {
    this.dayWorkedTime = this.toNormalTime(this.timeOfFinish - this.timeOfStart);
  }

}
