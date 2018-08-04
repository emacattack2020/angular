import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @ViewChild('childWorksHeader') header: ElementRef;
  constructor(private logger: LoggingService) {
    logger.log('child logging');
  }

  printHeader(myHeader: Element) {
    console.log('header is:', myHeader.innerHTML);
  }
  ngOnInit() {
    console.log('What is the child header', this.header.nativeElement.innerHTML);
  }

}
