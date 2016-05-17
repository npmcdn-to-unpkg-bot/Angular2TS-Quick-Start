import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[atColor]'
})
export class AtColorDirective {
  constructor(element: ElementRef) {
    element.nativeElement.style.color = '#F44336';
  }
}
