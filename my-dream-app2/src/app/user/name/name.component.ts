import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {
  @Input() name: 'max';
  @Output() updatedName = new EventEmitter<{serverName: string}>();
  constructor() { }

  ngOnInit() {
    console.log('name', this.name);
  }

  onNameUpdated() {
    this.updatedName.emit({
      serverName: this.name
    });
  }

}
