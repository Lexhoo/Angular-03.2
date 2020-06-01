import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appFirst]'
})
export class FirstDirective {

  @HostBinding('style.backgroundColor') myBackgroundColor:string;

  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'red';
   }

   @HostListener('mouseenter') mouseenterEvent (eventData:Event) {
     this.myBackgroundColor = 'red';
   }

   @HostListener('mouseleave') mouseLeaveEvent (eventData:Event) {
    this.myBackgroundColor = 'transparent';
    }
}
