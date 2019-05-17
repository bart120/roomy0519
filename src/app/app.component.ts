import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Roomy';
  user: User;

  constructor(private auth: AuthenticationService) { }
  ngOnInit(): void {
    // this.user = {};
    this.auth.user.subscribe(
      data => this.user = data
    );
  }

}
