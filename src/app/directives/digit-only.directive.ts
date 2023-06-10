import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Directive({
  selector: '[appDigitOnly]'
})
export class DigitOnlyDirective {

  private element: HTMLInputElement;
  @Input() appDigitOnly?:any;

  constructor(private elementRef: ElementRef) {
    this.element = this.elementRef.nativeElement;
  }
 
  @HostListener("keyup", ["$event.target.value"])
  onKeyup(value: string) {
    var regExp:RegExp = new RegExp("^[0-9]*$");
    var isDigit:RegExp = new RegExp("[0-9]");
 
    while (!regExp.test(this.element.value)) {
      for (let c of value) {
        if (!isDigit.test(c)) {
          this.element.value = this.element.value.replace(c, '');

          if (this.appDigitOnly instanceof FormControl) {
            this.appDigitOnly?.setValue(this.element.value);
          }
        }
      }
    }

  }
  
}