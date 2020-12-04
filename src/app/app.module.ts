import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { InputDateAndTimeComponent } from './input-date-and-time/input-date-and-time.component';
import { DatePickerComponent } from './input-date-and-time/date-picker/date-picker.component';
import { TimePickerComponent } from './input-date-and-time/time-picker/time-picker.component';
import { OutputDataComponent } from './output-data/output-data.component';
import { GraphComponent } from './output-data/graph/graph.component';
import { TextComponent } from './input-date-and-time/text/text.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { TimePickerSecondComponent } from './input-date-and-time/time-picker-second/time-picker-second.component';

@NgModule({
  declarations: [
    AppComponent,
    InputDateAndTimeComponent,
    DatePickerComponent,
    TimePickerComponent,
    OutputDataComponent,
    GraphComponent,
    TextComponent,
    TimePickerSecondComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
