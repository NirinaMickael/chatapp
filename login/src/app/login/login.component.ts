import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  title! : string;
  userName! : string;
  password! : string ;
  data!: string;
  ngOnInit(){
      this.title = "login";
      this.userName  = "Username";
      this.password = "password";
      this.data = ''
  }
}
