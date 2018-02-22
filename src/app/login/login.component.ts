import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 data:any;
  constructor(
  	private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit() {
      alert("OKKKKKKKKKKKKK");
  }

 validateUser() {
 	//this.router.navigate(['sub-test']);
    this.http.get('/test-portal-web/login').subscribe(data =>{
      console.log(data);
        this.data =data;
    });
  }
 }

