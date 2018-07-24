import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ParserService {

  constructor(
    private http: HttpClient
  ) { }

  public GetStatus() {
    return this.http.get("/api/parser/status",{ headers: { ignoreLoadingBar: '' } })
  }

  public StartParser() {
    return this.http.get("/api/parser/start")
  }

  public CanselParser() {
    return this.http.get("/api/parser/cancel")
  }
}
