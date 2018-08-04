import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoggingService } from '../logging.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @ViewChild('f') userForm: NgForm;
  name = 'max';
  email = 'default email';
  password = 'default password';
  confirmCheckbox: boolean;

  constructor(private router: Router, private logger: LoggingService, private userService: UserService) { }

  ngOnInit() {
    console.log(this.name, this.email, this.password);
  }

  addUser() {
    console.log('user added');
    this.email = this.userForm.value.email;
    this.password = this.userForm.value.password;

    console.log('new-password', this.password);
    this.userService.addUser();

    this.router.navigate(['/welcome']);
  }
  nameUpdated(myData: {serverName: string}) {
    console.log('parent name is', myData);
  }
}
