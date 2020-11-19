import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-date-and-time',
  templateUrl: './input-date-and-time.component.html',
  styleUrls: ['./input-date-and-time.component.css']
})
export class InputDateAndTimeComponent implements OnInit {
  constructor() { }

  //morningStartOfWork: { hour: number, minute: number };
  //morningFinishOfWork: { hour: number, minute: number };

  //afternoonStartOfWork: { hour: number, minute: number };
  //afternoonFinishOfWork: { hour: number, minute: number };

  timeOfStart: number = 0;
  timeOfFinish: number = 1260;
  inputedDate: Date;

  timeOfStartHolder: number;
  timeOfFinishHolder: number;

  notStartedTodayInput: boolean = false;
  notFinishedTodayInput: boolean = false;

  notFinishedTodayInput2: boolean = false;

  timeOfStart2 = 0;
  timeOfFinish2 = 1260;

  timeOfStartHolder2: number;
  timeOfFinishHolder2: number;

  dayWorkedTime: { hour: number, minute: number } = { hour: 0, minute: 0 };
  dayWorkedTime2: { hour: number, minute: number } = { hour: 0, minute: 0 };
  isDayWorkedTimeCorrect: boolean = true;
  isDayWorkedTimeCorrect2: boolean = true;

  showNewTimeRange: boolean = false;
  showNewTimeRangeButton: boolean = true;

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

  onFinishedChecked2() {
    if (this.notFinishedTodayInput2) {
      this.timeOfFinishHolder2 = this.timeOfFinish2;
      this.timeOfFinish2 = 1440;
    }
    else if ((!(this.notFinishedTodayInput)) && (this.timeOfFinishHolder !== null)) {
      this.timeOfFinish2 = this.timeOfFinishHolder2;
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
    if (this.notFinishedTodayInput) {
      this.timeOfFinish = 1440;
    }
    else if (this.notStartedTodayInput) {
      this.timeOfStart = 0;
    }
  }

  saveTime2(timeHolder: { timeOfStart: { hour: number, minute: number }, timeOfFinish: { hour: number, minute: number } }) {
    this.isDayWorkedTimeCorrect2 = true;
    this.timeOfStart2 = this.toMinutesOnly(timeHolder.timeOfStart);
    if ((timeHolder.timeOfFinish.minute == 0) && (timeHolder.timeOfFinish.hour == 0)) {
      this.timeOfFinish2 = 1440;
    }
    else {
      this.timeOfFinish2 = this.toMinutesOnly(timeHolder.timeOfFinish);
    }
    if (this.notFinishedTodayInput2) {
      this.timeOfFinish2 = 1440;
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
    else {
      this.isDayWorkedTimeCorrect = true;
    }
    if (this.showNewTimeRange) {
      this.getDayWorkedTime2();
    }
  }

  getDayWorkedTime2() {
    if ((this.timeOfStart > this.timeOfStart2) || (this.timeOfStart2 < this.timeOfFinish)) {
      this.isDayWorkedTimeCorrect2 = false;
    }
    else {
      this.isDayWorkedTimeCorrect2 = true;
      this.dayWorkedTime2 = this.toNormalTime(this.timeOfFinish2 - this.timeOfStart2);
      if ((this.timeOfFinish2 - this.timeOfStart2) < 0) {
        this.isDayWorkedTimeCorrect2 = false;
      }
      else {
        this.isDayWorkedTimeCorrect2 = true;
      }
    }
  }

  onShowNewTimeRange() {
    this.showNewTimeRange = true;
    this.showNewTimeRangeButton = false;
  }

  onHideNewTimeRange() {
    this.showNewTimeRange = false;
    this.showNewTimeRangeButton = true;
  }

}
