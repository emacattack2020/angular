import { Directive, OnInit, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighlightDirective implements OnInit {
  @HostBinding('style.background') background = 'transparent';
  constructor() {

  }
  ngOnInit(): void {
    this.background = 'yellow';
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.background = 'blue';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.background = 'red';
  }
}
