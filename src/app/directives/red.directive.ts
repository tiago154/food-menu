import { Directive, ElementRef } from '@angular/core'

@Directive({
  selector: '[appRed]'
})
export class RedDirective {

  constructor(elementHtml: ElementRef) {
    elementHtml.nativeElement.style.color = '#e35e6b'
  }

}
