import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  @ViewChild('password')
  pass: ElementRef;

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
  }

  login(mail: string, ev: MouseEvent): void {
    console.log(mail);
    console.log(this.pass.nativeElement.value);
    // appel au serveur
    let user = { login: 'login@gmail.com', token: 'DSFSFS5546345' };
    // sessionStorage.setItem('USER', JSON.stringify(user));
    this.auth.updateUser(user);
  }
}
