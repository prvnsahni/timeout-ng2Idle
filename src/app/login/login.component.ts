import { Component, OnInit } from '@angular/core';
import { TimeServiceService } from '../time-service.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  timedOut = this._timeService.timedOut;
  
  constructor(private _timeService: TimeServiceService, private router: Router) { }

  ngOnInit() {
    this._timeService.reset();
  }
}
