import { WarningMessageComponent } from './warning-message/warning-message.component';
import { Injectable, ElementRef } from '@angular/core';
import { Keepalive } from '@ng-idle/keepalive';
import { Idle, DEFAULT_INTERRUPTSOURCES, EventTargetInterruptSource } from '@ng-idle/core';
import { RouterLink, Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class TimeServiceService {
  }
