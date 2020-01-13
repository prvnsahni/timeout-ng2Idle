import { Component } from '@angular/core';
import { TimeServiceService } from './time-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'timeout';
  constructor(
    private _timeService: TimeServiceService
  ) { 
    this._timeService.idleTime();
  }

}
