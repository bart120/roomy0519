import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  @ViewChild('password')
  pass: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  login(mail: string, ev: MouseEvent): void {
    console.log(mail);
    console.log(this.pass.nativeElement.value);
  }
}
