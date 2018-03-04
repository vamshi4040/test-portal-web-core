import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  data: any;
  constructor(
    private router: Router,
    private http: HttpClient
  ) {}

  private count = 1;

  phoneNumberIds: number[] = [1];

  @ViewChild('myForm')
  private myForm: NgForm;

  printMyForm() {
    console.log(this.myForm);
  }

  register(myForm: NgForm) {
    console.log('Registration successful.');
    console.log(myForm.value);
  }


  ngOnInit() {
  }


  validateUser() {
    console.log(this.data);
    console.log(this.myForm.value);
    //this.router.navigate(['sub-test']);
    this.http.get('/test-portal-web/register').subscribe(data => {
      console.log(data);
      this.data = data;
    });
  }
}

