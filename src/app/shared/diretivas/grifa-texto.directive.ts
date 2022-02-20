import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[grifaTexto]',
})
export class GrifaTextoDirective {
  @HostListener('mouseover')
  onMouseover() {
    this.el.nativeElement.style.backgroundColor ='aliceblue';
    this.el.nativeElement.style.color ='blue';
    console.log('mouse over');
  }
  @HostListener('mouseout')
  onMouseOut() {
    console.log('mouse out');
    this.el.nativeElement.style.backgroundColor = 'darkblue';
    this.el.nativeElement.style.color ='white';
  }

  constructor(private el: ElementRef) {}
}
