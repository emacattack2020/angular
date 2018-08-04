import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  viewProviders: [ LoggingService ]
})
export class ParentComponent implements OnInit {

  constructor(private logger: LoggingService) {
    logger.log('Parent Logging');
  }

  ngOnInit() {
  }

}
