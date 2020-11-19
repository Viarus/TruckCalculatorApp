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

  timeOfStartHolder: number;
  timeOfFinishHolder: number;

  notStartedTodayInput: boolean = false;
  notFinishedTodayInput: boolean = false;

  dayWorkedTime: { hour: number, minute: number } = { hour: 0, minute: 0 };
  isDayWorkedTimeCorrect: boolean = true;

  ngOnInit(): void {
  }

  onStartedChecked() {
    if (this.notStartedTodayInput) {
      this.timeOfStartHolder = this.timeOfStart;
      this.timeOfStart = 0;
    }
    else if ((!(this.notStartedTodayInput)) && (this.timeOfStartHolder !== null)) {
      this.timeOfStart = this.timeOfStartHolder;
    }
  }

  onFinishedChecked() {
    if (this.notFinishedTodayInput) {
      this.timeOfFinishHolder = this.timeOfFinish;
      this.timeOfFinish = 1440;
    }
    else if ((!(this.notFinishedTodayInput)) && (this.timeOfFinishHolder !== null)) {
      this.timeOfFinish = this.timeOfFinishHolder;
    }
  }

  saveTime(timeHolder: { timeOfStart: { hour: number, minute: number }, timeOfFinish: { hour: number, minute: number } }) {
    this.timeOfStart = this.toMinutesOnly(timeHolder.timeOfStart);
    if ((timeHolder.timeOfFinish.minute == 0) && (timeHolder.timeOfFinish.hour == 0)) {
      this.timeOfFinish = 1440;
    }
    else {
      this.timeOfFinish = this.toMinutesOnly(timeHolder.timeOfFinish);
    }    
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
    if ((this.timeOfFinish - this.timeOfStart) < 0) {
      this.isDayWorkedTimeCorrect = false;
    }
  }

}
