import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-time-picker-second',
  templateUrl: './time-picker-second.component.html',
  styleUrls: ['./time-picker-second.component.css']
})
export class TimePickerSecondComponent {
  timeOfStart = { hour: 0, minute: 0 };
  timeOfFinish = { hour: 21, minute: 0 };

  @Input() disableStartTime: boolean = true;
  @Input() disableFinishTime: boolean = true;

  @Output() eventHandler = new EventEmitter<{ timeOfStart: { hour: number, minute: number }, timeOfFinish: { hour: number, minute: number } }>();
  constructor() { }

  onChange() {
    this.eventHandler.emit({ timeOfStart: this.timeOfStart, timeOfFinish: this.timeOfFinish });
  }
}
