import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { async } from '@angular/core/testing';

@Component({
  selector: 'my-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }
  name: string
  pass: string
  ngOnInit() {

  }

  async send(e) {
    switch (e.keyCode) {
      case 13:
        await this.http.post('/api/login', { name: this.name, pass: this.pass }, { responseType: "text" }).toPromise().then(s => {
          this.router.navigateByUrl('/m2m')
        })
        break;
    }


  }
}
