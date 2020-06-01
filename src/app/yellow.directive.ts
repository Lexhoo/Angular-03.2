import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appYellow]'
})
export class YellowDirective {

  @HostBinding('style.backgroundColor') myBackgroundColor:string;

  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }
@HostListener('mouseenter') mouseEnterEvent (eventData:Event) {
  this.myBackgroundColor = 'yellow';
}

@HostListener('mouseleave') mouseLeaveEvent (eventData:Event) {
  this.myBackgroundColor = 'red';
  }
}

