import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  userId: string;
  title: string;
  body: string;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUser()
    .subscribe(
      (response) => {
        console.log(response);
        this.userId = response.id;
        this.title = response.title;
        this.body = response.body;
      },
      (error) => console.log(error)
   );
  }
}
