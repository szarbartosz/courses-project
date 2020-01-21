import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { Subscription} from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() signedIn = false;
  userState: Subscription;

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(){
    this.userState = this.authService.authState$.subscribe( p => {
      this.signedIn = p !== null;
    });
  }

  logOut() {
    this.authService.signOut();
  }

}
