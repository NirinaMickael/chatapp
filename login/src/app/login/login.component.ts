import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  title!:  string;
  description! : string;
  createdDate! : Date;
  snaps! : number;
  imageUrl! : string;
  ngOnInit(){
      this.title = "login";
      this.description = "c'est bon ";
      this.createdDate = new Date();
      this.snaps = 6 ;
      this.imageUrl = "#";
  }
}
