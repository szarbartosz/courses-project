import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user = {
    email: '',
    password: ''
  };

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {}

  register(): void{
    this.authService.signUp(this.user.email, this.user.password);
  }

}
