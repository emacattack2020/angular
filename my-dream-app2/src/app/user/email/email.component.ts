import { Component, OnInit, Input } from '@angular/core';
import { LoggingService } from '../../logging.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  @Input() email: string;
  constructor(private logger: LoggingService) {}

  ngOnInit() {
    console.log('email', this.email);
  }
}
