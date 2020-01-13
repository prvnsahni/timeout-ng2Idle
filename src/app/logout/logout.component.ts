import { Component, OnInit } from '@angular/core';
import { TimeServiceService } from '../time-service.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
idleState = this._service.idleState;
  constructor(private _service: TimeServiceService) { }

  ngOnInit() {
  }

}