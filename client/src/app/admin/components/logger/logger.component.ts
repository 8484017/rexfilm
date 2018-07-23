import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { LogService } from '../../../services/log.service';
import { Log } from '../../../../../../models/log.model';
import { timeInterval, map, tap, switchMap, repeatWhen, delay, delayWhen, repeat, flatMap } from 'rxjs/operators';
import { interval, Observable, Subscription } from 'rxjs';
import { isPlatformServer, isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'my-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.scss']
})
export class LoggerComponent implements OnInit {
  constructor(
    private log: LogService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  logs: Log[] = []
  timer$: Subscription
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {

      this.timer$ = interval(2000).pipe(flatMap(() => this.log.getLog())).subscribe(s => this.logs = s)
    }

  }

  async clearLog() {
    await this.log.clearLog().toPromise()
  }

  ngOnDestroy() {
    if (this.timer$) {
      this.timer$.unsubscribe()
    }
  }
}
