import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {
  @Output() eventHandler = new EventEmitter<Date>();

  constructor() { }

  ngOnInit(): void {
  }
  onDateInput(event: MatDatepickerInputEvent<Date>) {
    this.eventHandler.emit(event.value);
  }
}
