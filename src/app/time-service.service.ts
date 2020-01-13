import { Injectable } from '@angular/core';
import { Keepalive } from '@ng-idle/keepalive';
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { RouterLink, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TimeServiceService {
  timeoutTime = 60;
  idleState = 'Not started.';
  timedOut = false;
  lastPing?: Date = null;

  constructor(private _idle: Idle, private _keepalive: Keepalive,
    private _router: Router) {}
  
  idleTime() {
    // sets an idle timeout of 5 seconds, for testing purposes.
    this._idle.setIdle(5);
    // sets a timeout period of 5 seconds. after 10 seconds of inactivity, the user will be considered timed out.
    this._idle.setTimeout(5);
    // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
    this._idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    this._idle.onIdleEnd.subscribe(() => this.idleState = 'No longer _idle.');
    this._idle.onTimeout.subscribe(() => {
      this.idleState = 'Timed out!';
      this.timedOut = true;
    });
    this._idle.onIdleStart.subscribe(() => this.idleState = 'You\'ve gone idle!');
    this._idle.onTimeoutWarning.subscribe((countdown) => this.idleState = 'You will time out in ' + countdown + ' seconds!');
    console.log(this.idleState);

    // sets the ping interval to 15 seconds
    this._keepalive.interval(15);

    this._keepalive.onPing.subscribe(() => this.lastPing = new Date());
    console.log(this.lastPing);
  }

  reset() {
    this._idle.watch();
    this.idleState = 'Started.';
    this.timedOut = false;
  }
  clear() {
    if(this.timedOut = true) {
      this._router.navigateByUrl('/logout');
      localStorage.clear();
    }
  }
}
