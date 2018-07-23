import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Log } from "../../../../models/log.model";
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from "rxjs/operators/";
@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(
    private http: HttpClient
  ) { }



  public getLog(): Observable<Log[]> {
    return this.http.get<Log[]>("/api/log")
  }

  public clearLog() {
    return this.http.delete("/api/log", { responseType: "blob" }).pipe(tap(s => {
      this.getLog().toPromise()
    }))
  }
}
