import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit, OnChanges {
  @Input() password: string;
  constructor() { console.log('password', this.password); }

  ngOnInit() {
    console.log('password', this.password);
  }
  ngOnChanges() {
    console.log('password', this.password);
  }
  log() {
    console.log(this.password);
  }
}
